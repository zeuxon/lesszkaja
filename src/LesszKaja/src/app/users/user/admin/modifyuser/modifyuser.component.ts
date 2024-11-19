import { Component, OnInit, inject } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import * as validator from "../../../../services/validators";

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
  columnsToDisplay = ['id', 'felhasznalonev', 'emailcim', 'telefonszam', 'lakcim', 'felfuggesztve'];
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
  expandedElement!: User | null;
  emptyForm = new FormGroup({});

  modifyUsers: Map<number, FormGroup> = new Map();

  ngOnInit(): void {
    this.http.get("/api/getusers").subscribe((response: any) => {
      this.loadUsers(response);
      this.initializeFormGroups(response);
    });
  }

  deleteUser(id:number) {
    this.http.delete("/api/deleteuser"+"/"+id).subscribe((response: any) => {
      this.http.get("/api/getusers").subscribe((response: any) => {
        this.loadUsers(response);
        this.modifyUsers.delete(id);
        });
    })
  }

  suspendUser(id:number,felfuggesztve:boolean) {
    this.http.post("/api/suspenduser", {felfuggesztve:felfuggesztve,id : id}).subscribe((response: any) => {
      this.http.get("/api/getusers").subscribe((response: any) => {
        this.loadUsers(response);
      });
    })
  }

  onButtonClick(userId: number): void {
    console.log("Button clicked for user with ID:", userId);
    // Add your code here to handle the specific user
  }

  initializeFormGroups(users: any) {
    this.modifyUsers = new Map(
      users.map((user: any) => [
        user.id,
        new FormGroup({
          felhasznalonev: new FormControl("", [validator.modifyNameValidator()]),
          emailcim: new FormControl("", [validator.modifyStrictEmailValidator()]),
          telefonszam: new FormControl("", [validator.modifyPhoneValidator()]),
          lakcim: new FormControl("", [validator.modifyAddressValidator()]),
        })
      ])
    );
  }

  loadUsers(users: any) {
    this.usersArray = users.map((user: any) => ({
      id: user.id,
      felhasznalonev: user.felhasznalonev,
      emailcim: user.emailcim,
      telefonszam: user.telefonszam,
      lakcim: user.lakcim,
      felfuggesztve: user.felfuggesztve ? "igen" : "nem"
    }));
    this.dataSource.data = this.usersArray;
  }

  toggleRow(element: User) {
    this.expandedElement = this.expandedElement === element ? null : element;
  }

  userFields: Array<keyof UserData> = ['felhasznalonev', 'emailcim', 'telefonszam', 'lakcim'];

  anyFieldHasValue(id:number): boolean {
    const form = this.modifyUsers.get(id)
    return form ? this.userFields.some(field => !!form.get(field)?.value) : false;
  }

  userTempModifyData: UserData = {
    felhasznalonev: "",
    emailcim: "",
    telefonszam: "",
    lakcim: "",
    id : 0
  };

  defaultData!: UserData;
  isFormSubmitted: boolean = false;
  SuccessfulModify: boolean = true;
  OneFieldValid: boolean = true;



  onSubmit(element:any) {
    const userForm = this.modifyUsers.get(element.id);
    if (userForm) {


      const isFormValid = userForm.valid;
      this.isFormSubmitted = false;


    if (this.anyFieldHasValue(element.id)) {
        this.isFormSubmitted = true;
        this.userTempModifyData["id"]=element["id"];

        this.userFields.forEach(field => {
          const control = userForm.get(field);
          if (control && !control.value) {
            this.userTempModifyData[field] = String(element[field]);
          } else {
            this.userTempModifyData[field] = userForm.controls[field].value
          }
        });
        this.http.post('/api/modifyuseradmin', this.userTempModifyData).subscribe(response => {
          console.log(this.userTempModifyData)
          userForm.reset({
            felhasznalonev: '',
            email: '',
            telefonszam: '',
            lakcim: '',
          });
          userForm.markAsPristine();
          userForm.markAsUntouched();

          this.SuccessfulModify = true;
          this.http.get("/api/getusers").subscribe((response: any) => {
          this.loadUsers(response);
          });
        }, error => {
          console.log(error);
          this.SuccessfulModify = false;
        });

      }
    }

  }




}

export interface User {
  id: number;
  felhasznalonev: string;
  emailcim: string;
  telefonszam: string;
  lakcim: string;
  felfuggesztve: boolean;
}

interface UserData {
  felhasznalonev: string;
  emailcim: string;
  telefonszam: string;
  lakcim: string;
  id: string | number
}
