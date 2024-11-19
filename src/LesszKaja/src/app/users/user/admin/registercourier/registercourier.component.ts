import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule} from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { hashSync } from "bcrypt-ts";
import * as validator from "../../../../services/validators";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-registercourier',
  standalone: true,
  imports: [FormsModule, CommonModule, HttpClientModule, ReactiveFormsModule],
  templateUrl: './registercourier.component.html',
  styleUrl: './registercourier.component.scss'
})
export class RegistercourierComponent {
  registerCourier : FormGroup;
  isFormSubmitted: boolean = false;
  SuccessfulRegistration: boolean = true;
    constructor(private http: HttpClient) {
        this.registerCourier = new FormGroup({
          nev: new FormControl("",[Validators.required,validator.nameValidator()]),
          email: new FormControl("",[Validators.required,validator.strictEmailValidator()]),
          tel: new FormControl("",[Validators.required,validator.phoneValidator()]),
          jelszo: new FormControl("",[Validators.required,validator.passwordValidator()])
        })
    }

    onSubmit(form: any) {
      const isFormValid = this.registerCourier.valid;
      this.isFormSubmitted=true;

      const courierData = {
        nev: this.registerCourier.controls['nev'].value,
        emailcim: this.registerCourier.controls['email'].value,
        jelszo: hashSync(this.registerCourier.controls['jelszo'].value), //Jelszo hashelese
        telefonszam: this.registerCourier.controls['tel'].value,
      };

      //console.log(userData);

    this.http.post('/api/registercourier', courierData)
    .subscribe(response => {
      this.registerCourier.reset({
        nev: '',
        email: '',
        tel: '',
        jelszo: ''
      });

      Object.keys(this.registerCourier.controls).forEach(field => {
        const control = this.registerCourier.get(field);
        control?.setErrors(null); // Clear all errors
      });

      this.registerCourier.markAsPristine();
      this.registerCourier.markAsUntouched();

      console.log(response);
      this.SuccessfulRegistration=true;
    }, error => {
      console.log(error);
      this.SuccessfulRegistration=false;
    });


    }
}
