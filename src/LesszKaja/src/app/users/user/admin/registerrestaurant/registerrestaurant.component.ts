import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule} from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { hashSync } from "bcrypt-ts";
import * as validator from "../../../../services/validators";

@Component({
  selector: 'app-registerrestaurant',
  standalone: true,
  imports: [FormsModule, CommonModule, HttpClientModule, ReactiveFormsModule],
  templateUrl: './registerrestaurant.component.html',
  styleUrl: './registerrestaurant.component.scss'
})


export class RegisterrestaurantComponent {
  registerRestaurant : FormGroup;
  isFormSubmitted: boolean = false;
  SuccessfulRegistration: boolean = true;
    constructor(private http: HttpClient) {
        this.registerRestaurant = new FormGroup({
          nev: new FormControl("",[Validators.required,validator.nameValidator()]),
          email: new FormControl("",[Validators.required,validator.strictEmailValidator()]),
          tel: new FormControl("",[Validators.required,validator.phoneValidator()]),
          cim: new FormControl("",[Validators.required,validator.addressValidator()]),
          jelszo: new FormControl("",[Validators.required,validator.passwordValidator()])
        })
    }

    onSubmit(form: any) {
      const isFormValid = this.registerRestaurant.valid;
      this.isFormSubmitted=true;

      const restaurantData = {
        nev: this.registerRestaurant.controls['nev'].value,
        emailcim: this.registerRestaurant.controls['email'].value,
        jelszo: hashSync(this.registerRestaurant.controls['jelszo'].value), //Jelszo hashelese
        telefonszam: this.registerRestaurant.controls['tel'].value,
        cim: this.registerRestaurant.controls['cim'].value,
      };

      //console.log(userData);

    this.http.post('/api/registerrestaurant', restaurantData)
    .subscribe(response => {
      this.registerRestaurant.reset({
        nev: '',
        email: '',
        tel: '',
        cim: '',
        jelszo: ''
      });

      Object.keys(this.registerRestaurant.controls).forEach(field => {
        const control = this.registerRestaurant.get(field);
        control?.setErrors(null); // Clear all errors
      });

      this.registerRestaurant.markAsPristine();
      this.registerRestaurant.markAsUntouched();

      console.log(response);
      this.SuccessfulRegistration=true;
    }, error => {
      console.log(error);
      this.SuccessfulRegistration=false;
    });


    }
}
