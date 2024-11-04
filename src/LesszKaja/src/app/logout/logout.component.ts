import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { NavbarService } from '../services/navbar.service';


@Component({
  selector: 'app-logout',
  template: '',
})
export class LogoutComponent {
  constructor(private router: Router, private navbarService: NavbarService) {
    this.logout();
  }

  logout() {
    console.log("LOGOUT");
    localStorage.clear();
    localStorage.removeItem('authToken');
    this.router.navigate(['/home']);
    this.navbarService.triggerRefresh();
  }
}