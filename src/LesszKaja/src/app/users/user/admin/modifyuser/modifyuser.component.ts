import { Component, OnInit, inject } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { UsermanagerService } from '../../../../services/usermanager.service';
import { hashSync } from "bcrypt-ts";
import * as validator from "../../../../services/validators";

/**
 * @title Table with expandable rows
 */
@Component({
  selector: 'table-expandable-rows-example',
  styleUrls: ['modifyuser.component.scss'],
  templateUrl: 'modifyuser.component.html',
  animations: [
    trigger('detailExpand', [
      state('collapsed,void', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]), 
  ],
  standalone: true,
  imports: [MatTableModule, MatButtonModule, MatIconModule, HttpClientModule, CommonModule, FormsModule, ReactiveFormsModule]
})
export class ModifyuserComponent implements OnInit {
  http = inject(HttpClient);
  usersArray: Array<User> = [];
  dataSource = new MatTableDataSource<User>(this.usersArray);
  columnsToDisplay = ['id', 'felhasznalonev', 'emailcim', 'telefonszam', 'lakcim'];
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
  expandedElement!: User | null;

  ngOnInit(): void {
    console.log("ModifyuserComponent initialized");
    this.http.get("http://localhost:3000/getusers").subscribe((response: any) => {
      this.loadUsers(response);
    });
  }

  loadUsers(users: any) {
    this.usersArray = users.map((user: any) => ({
      id: user.id,
      felhasznalonev: user.felhasznalonev,
      emailcim: user.emailcim,
      telefonszam: user.telefonszam,
      lakcim: user.lakcim
    }));
    this.dataSource.data = this.usersArray; // Update the dataSource with the loaded data
    console.log(this.usersArray);
  }

  toggleRow(element: User) {
    this.expandedElement = this.expandedElement === element ? null : element;
  }

  userFields: Array<keyof UserData> = ['felhasznalonev', 'emailcim', 'jelszo', 'telefonszam', 'lakcim'];

  anyFieldHasValue(): boolean {
    return this.userFields.some(field => !!this.modifyUser.get(field)?.value);
  }

  userTempModifyData: UserData = {
    felhasznalonev: "",
    emailcim: "",
    jelszo: "",
    telefonszam: "",
    lakcim: "",
    id: 0,
  };

  responseData!: UserData;
  responseDataConverter: any;
  userManager = inject(UsermanagerService)
  modifyUser: FormGroup;
  isFormSubmitted: boolean = false;
  SuccessfulModify: boolean = true;
  OneFieldValid: boolean = true;

  constructor() {
    this.modifyUser = new FormGroup({
      felhasznalonev: new FormControl("", [validator.modifyNameValidator()]),
      emailcim: new FormControl("", [validator.modifyStrictEmailValidator()]),
      telefonszam: new FormControl("", [validator.modifyPhoneValidator()]),
      lakcim: new FormControl("", [validator.modifyAddressValidator()]),
      jelszo: new FormControl("", [validator.modifyPasswordValidator()])
    });
  }


  onSubmit(form: any) {
    const isFormValid = this.modifyUser.valid;
    this.isFormSubmitted = false;

    this.OneFieldValid = this.userFields.some(field => !!this.modifyUser.get(field)?.value);
    if (this.OneFieldValid) {
      this.isFormSubmitted = true;
      this.http.post('http://localhost:3000/login', {
        emailcim: this.userManager.getUserEmail(),
        jelszo: this.userManager.getUserPassword()
      }).subscribe(response => {
        this.responseDataConverter = response;

        this.responseData = this.responseDataConverter.results[0] as UserData;
        this.userTempModifyData['id'] = this.responseData['id'];

        this.userFields.forEach(field => {
          const control = this.modifyUser.get(field);
          if (control && !control.value) {
            this.userTempModifyData[field] = String(this.responseData[field]);
          } else {
            this.userTempModifyData[field] = this.modifyUser.controls[field].value
            if (field == "jelszo") {
              localStorage["jelszo"]=this.userTempModifyData[field];
              this.userTempModifyData[field] = hashSync(this.userTempModifyData[field])
            }
          }
        });

        localStorage["emailcim"]=this.userTempModifyData["emailcim"];

        this.http.post('http://localhost:3000/modifyuser', this.userTempModifyData).subscribe(response => {

          this.modifyUser.reset({
            felhasznalonev: '',
            email: '',
            telefonszam: '',
            lakcim: '',
            jelszo: ''
          });
          this.modifyUser.markAsPristine();
          this.modifyUser.markAsUntouched();

          this.SuccessfulModify = true;
        }, error => {
          console.log(error);
        });

      }, error => {
        console.log(error);
        this.SuccessfulModify = false;
      });
    }
    }
}

export interface User {
  id: number;
  felhasznalonev: string;
  emailcim: string;
  telefonszam: string;
  lakcim: string;
}

interface UserData {
  felhasznalonev: string;
  emailcim: string;
  jelszo: string;
  telefonszam: string;
  lakcim: string;
  id: number | string;
}