import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule} from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { hashSync } from "bcrypt-ts";
import * as validator from "../../../../services/validators";

@Component({
  selector: 'app-registeruser',
  standalone: true,
  imports: [FormsModule, CommonModule, HttpClientModule, ReactiveFormsModule],
  templateUrl: './registeruser.component.html',
  styleUrl: './registeruser.component.scss'
})
export class RegisteruserComponent {
  registerUser : FormGroup;
  isFormSubmitted: boolean = false;
  SuccessfulRegistration: boolean = true;
    constructor(private http: HttpClient) {
        this.registerUser = new FormGroup({
          felhasznalonev: new FormControl("",[Validators.required,validator.nameValidator()]),
          email: new FormControl("",[Validators.required,validator.strictEmailValidator()]),
          tel: new FormControl("",[Validators.required,validator.phoneValidator()]),
          lakcim: new FormControl("",[Validators.required,validator.addressValidator()]),
          jelszo: new FormControl("",[Validators.required,validator.passwordValidator()])
        })
    }

    onSubmit(form: any) {
      const isFormValid = this.registerUser.valid;
      this.isFormSubmitted=true;

      const restaurantData = {
        felhasznalonev: this.registerUser.controls['felhasznalonev'].value,
        emailcim: this.registerUser.controls['email'].value,
        jelszo: hashSync(this.registerUser.controls['jelszo'].value), //Jelszo hashelese
        telefonszam: this.registerUser.controls['tel'].value,
        lakcim: this.registerUser.controls['lakcim'].value,
        admine: 0,
      };

      //console.log(userData);

    this.http.post('http://localhost:3000/register', restaurantData)
    .subscribe(response => {
      this.registerUser.reset({
        felhasznalonev: '',
        email: '',
        tel: '',
        lakcim: '',
        jelszo: ''
      });

      Object.keys(this.registerUser.controls).forEach(field => {
        const control = this.registerUser.get(field);
        control?.setErrors(null); // Clear all errors
      });

      this.registerUser.markAsPristine();
      this.registerUser.markAsUntouched();

      console.log(response);
      this.SuccessfulRegistration=true;
    }, error => {
      console.log(error);
      this.SuccessfulRegistration=false;
    });


    }
}
