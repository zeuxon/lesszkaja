import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule} from '@angular/common';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { compareSync } from "bcrypt-ts";
import { NavbarComponent } from '../../../navbar/navbar.component';
import { NavbarService } from '../../../services/navbar.service';

@Component({
  selector: 'app-logincourier',
  standalone: true,
  imports: [FormsModule,CommonModule,HttpClientModule,RouterOutlet,RouterLink,NavbarComponent],
  templateUrl: './logincourier.component.html',
  styleUrl: './logincourier.component.scss'
})
export class LogincourierComponent {
  constructor(private http: HttpClient, private router: Router, private navbarService: NavbarService) {}

  public userData: any;
  public userLoginData = {
    emailcim: "",
    jelszo: "",
  };

  private logInSuccess() {
    return compareSync(this.userLoginData.jelszo, this.userData.jelszo); //hashek osszevetese
  }

  onSubmit(form: any) {
    this.userLoginData = {
      emailcim: form.value.email,
      jelszo: form.value.password,
    };

  this.http.post('http://localhost:3000/logincourier',this.userLoginData)
  .subscribe(response=> {
    this.userData=response;
    this.userData=this.userData.results[0];

    //Menetkövetés
    //Ki kell törölni kijelentkezéskor

    if (this.logInSuccess()) {
      localStorage.setItem("jelszo", this.userData.jelszo);
    localStorage.setItem("emailcim", this.userData.emailcim);
    localStorage.setItem("tipus", "courier");
    // this.navbar.updateNavbar();
    this.navbarService.triggerRefresh();
    this.router.navigateByUrl("home");
    }
  }, error => {
    console.log(error);
  });
  }
}
