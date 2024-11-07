import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule} from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { hashSync } from "bcrypt-ts";
import * as validator from "../../../services/validators";

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, CommonModule, HttpClientModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})

export class RegisterComponent {

  userForm : FormGroup;
  isFormSubmitted: boolean = false;
  SuccessfulRegistration: boolean = true;
    constructor(private http: HttpClient) {
        this.userForm = new FormGroup({
          felhasznalonev: new FormControl("",[Validators.required,validator.nameValidator()]),
          email: new FormControl("",[Validators.required,validator.strictEmailValidator()]),
          tel: new FormControl("",[Validators.required,validator.phoneValidator()]),
          lakcim: new FormControl("",[Validators.required,validator.textValidator()]),
          jelszo: new FormControl("",[Validators.required,validator.passwordValidator()])
        })
    }

    onSubmit(form: any) {
      const isFormValid = this.userForm.valid;
      this.isFormSubmitted=true;

      const userData = {
        felhasznalonev: this.userForm.controls['felhasznalonev'].value,
        emailcim: this.userForm.controls['email'].value,
        jelszo: hashSync(this.userForm.controls['jelszo'].value), //Jelszo hashelese
        telefonszam: this.userForm.controls['tel'].value,
        lakcim: this.userForm.controls['lakcim'].value,
        admine: false
      };

      //console.log(userData);

    this.http.post('http://localhost:3000/register', userData)
    .subscribe(response => {
      this.userForm.reset({
        felhasznalonev: '',
        email: '',
        tel: '',
        lakcim: '',
        jelszo: ''
      });

      Object.keys(this.userForm.controls).forEach(field => {
        const control = this.userForm.get(field);
        control?.setErrors(null); // Clear all errors
      });

      this.userForm.markAsPristine();
      this.userForm.markAsUntouched();

      console.log(response);
      this.SuccessfulRegistration=true;
    }, error => {
      console.log(error);
      this.SuccessfulRegistration=false;
    });


    }
}
