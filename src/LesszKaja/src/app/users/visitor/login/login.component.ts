import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule} from '@angular/common';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { compareSync } from "bcrypt-ts";
import { NavbarComponent } from '../../../navbar/navbar.component';
import { NavbarService } from '../../../services/navbar.service';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,CommonModule,HttpClientModule,RouterOutlet,RouterLink,NavbarComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  constructor(private http: HttpClient, private router: Router, private navbarService: NavbarService) {}

  // navbar = new NavbarComponent(this.router);

  public userData: any;
  public userLoginData = {
    emailcim: "",
    jelszo: "",
  };

  private logInSuccess() {
    if (this.userData === undefined) {
      return false;
    }
    return compareSync(this.userLoginData.jelszo, this.userData.jelszo); //hashek osszevetese
  }

  suspended = false;
  formSubmitted = false;
  validData = false;

  onSubmit(form: any) {
    this.formSubmitted = true;
    this.userLoginData = {
      emailcim: form.value.email,
      jelszo: form.value.password,
    };

  this.http.post('http://localhost:3000/login',this.userLoginData)
  .subscribe(response=> {

    this.userData=response;
    this.userData=this.userData.results[0];

    //Menetkövetés
    //Ki kell törölni kijelentkezéskor

    if (this.logInSuccess()) {
      this.validData = true;
      if (!this.userData.felfuggesztve) {
      this.suspended = false;
      localStorage.setItem("jelszo", this.userData.jelszo);
      localStorage.setItem("emailcim", this.userData.emailcim);
    if (this.userData.admine) {
      localStorage.setItem("tipus", "admin")
    } else {
      localStorage.setItem("tipus", "user")
    }
    // this.navbar.updateNavbar();
    this.navbarService.triggerRefresh();
    this.router.navigateByUrl("home");
    } else {
      this.suspended = true;
    }
    } else {
      this.suspended = false;
      this.validData=false;
    }
  }, error => {
    this.suspended = false;
    this.validData=false;
  });
  }


}
