import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule} from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { compareSync } from "bcrypt-ts";


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,CommonModule,HttpClientModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  constructor(private http: HttpClient) {}

  public userData: any;
  public userLoginData = {
    emailcim: "",
    jelszo: "",
  };

  public logInSuccess() {
    return compareSync(this.userLoginData.jelszo, this.userData.jelszo); //hashek osszevetese
  }

  onSubmit(form: any) {
    this.userLoginData = {
      emailcim: form.value.email,
      jelszo: form.value.password,
    };

  this.http.post('http://localhost:3000/login',this.userLoginData)
  .subscribe(response=> {
    this.userData=response;
    this.userData=this.userData.results[0];
    console.log(this.logInSuccess());
  }, error => {
    console.log(error);
  });
  }


}
