import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { hashSync } from "bcrypt-ts";
import * as validator from "../../../../services/validators";
import { UsermanagerService } from '../../../../services/usermanager.service';

interface UserData {
  nev: string;
  emailcim: string;
  jelszo: string;
  telefonszam: string;
  cim: string;
  id: number | string;
}

@Component({
  selector: 'app-restaurantprofile',
  standalone: true,
  imports: [FormsModule, CommonModule, HttpClientModule, ReactiveFormsModule],
  templateUrl: './restaurantprofile.component.html',
  styleUrl: './restaurantprofile.component.scss'
})


export class RestaurantprofileComponent {
  userFields: Array<keyof UserData> = ['nev', 'emailcim', 'jelszo', 'telefonszam', 'cim'];

  anyFieldHasValue(): boolean {
    return this.userFields.some(field => !!this.modifyUser.get(field)?.value);
  }

  userTempModifyData: UserData = {
    nev: "",
    emailcim: "",
    jelszo: "",
    telefonszam: "",
    cim: "",
    id: 0,
  };

  responseData!: UserData;
  responseDataConverter: any;
  userManager = inject(UsermanagerService)
  modifyUser: FormGroup;
  isFormSubmitted: boolean = false;
  SuccessfulModify: boolean = true;
  OneFieldValid: boolean = true;

  constructor(private http: HttpClient) {
    this.modifyUser = new FormGroup({
      nev: new FormControl("", [validator.modifyNameValidator()]),
      emailcim: new FormControl("", [validator.modifyStrictEmailValidator()]),
      telefonszam: new FormControl("", [validator.modifyPhoneValidator()]),
      cim: new FormControl("", [validator.modifyAddressValidator()]),
      jelszo: new FormControl("", [validator.modifyPasswordValidator()])
    });
  }


  onSubmit(form: any) {
    const isFormValid = this.modifyUser.valid;
    this.isFormSubmitted = false;

    this.OneFieldValid = this.userFields.some(field => !!this.modifyUser.get(field)?.value);
    if (this.OneFieldValid) {
      this.isFormSubmitted = true;
      this.http.post('/api/loginrestaurant', {
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
        this.http.post('/api/modifyrestaurant', this.userTempModifyData).subscribe(response => {

          this.modifyUser.reset({
            nev: '',
            email: '',
            telefonszam: '',
            cim: '',
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
