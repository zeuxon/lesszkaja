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
        felhasznalonev: form.value.username,
        emailcim: form.value.email,
        jelszo: hashSync(form.value.password), //Jelszo hashelese
        telefonszam: form.value.tel,
        lakcim: form.value.address,
        admine: false
      };

    this.http.post('http://localhost:3000/register', userData)
    .subscribe(response => {
      console.log(response);
    }, error => {
      console.log(error);
    });


    }
}
