import { Component, OnInit, Injector } from '@angular/core';
import {Router, RouterLink, RouterOutlet } from '@angular/router';
import {UsermanagerService} from "../services/usermanager.service";
import { CommonModule } from '@angular/common';
import { NavbarService } from '../services/navbar.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit {
  navbarItems: Array<{ label: string; route: string }> = [];
  private navbarService: NavbarService;

  constructor(private router: Router, private injector: Injector) {
    this.navbarService = this.injector.get(NavbarService);
  }

  usermanager = new UsermanagerService();

  ngOnInit(): void {
    this.navbarService.refreshNavbar$.subscribe(() => {
      this.updateNavbar();
    });
    this.loadNavbarItems();
    //console.log(this.usermanager.isLoggedIn());
    //console.log(localStorage);
    this.updateNavbar();
  }

  updateNavbar() {
    this.loadNavbarItems();
  }

  loadNavbarItems() {
    if (!this.usermanager.isLoggedIn()) {
      this.navbarItems=[
        { label: 'Kezdőlap', route: '/home' },
        { label: 'Éttermek', route: '/restaurants' },
        { label: 'Bejelentkezés', route: '/login' },
        { label: 'Regisztráció', route: '/register' }
      ]
    } else if (this.usermanager.getUserType() == "user") {
      console.log("LEFUT");
      this.navbarItems=[
        { label: 'Kezdőlap', route: '/home' },
        { label: 'Éttermek', route: '/restaurants' },
        { label: 'Kijelentkezés', route: '/logout' }
      ]
    } else if (this.usermanager.getUserType() == "admin") {
      this.navbarItems=[
        { label: 'Kezdőlap', route: '/home' },
        { label: 'Éttermek', route: '/restaurants' },
        { label: 'Admin Panel', route: '/admin' },
        { label: 'Kijelentkezés', route: '/logout' }
      ]
    } else if (this.usermanager.getUserType() == "courier") {
      this.navbarItems=[
        { label: 'Kezdőlap', route: '/home' },
        { label: 'Rendelések', route: '/home' },
        { label: 'Kijelentkezés', route: '/logout' }
      ]
    } else if (this.usermanager.getUserType() == "restaurantmanager") {
      this.navbarItems=[
        { label: 'Kezdőlap', route: '/home'},
        { label: 'Raktár', route: '/home' },
        { label: 'Kijelentkezés', route: '/logout' }
      ]
    }
  }



  public openRegister(): void {
    this.router.navigateByUrl("register");
  }

}
