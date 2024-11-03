import { Component } from '@angular/core';
import {Router, RouterLink, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  constructor(private router: Router) {}

  public openRegister(): void {
    console.log("asd");
    this.router.navigateByUrl("register");
  }

}