import { Component, OnInit, Injector } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { UsermanagerService } from "../services/usermanager.service";
import { CommonModule } from '@angular/common';
import { NavbarService } from '../services/navbar.service';
import { MatIconModule } from '@angular/material/icon'; // Import MatIconModule

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule, MatIconModule], // Add MatIconModule to imports
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isNavbarOpen = false;

  toggleNavbar() {
    this.isNavbarOpen = !this.isNavbarOpen;
  }

  closeNavbar() {
    this.isNavbarOpen = false;
  }

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
    this.updateNavbar();
  }

  updateNavbar() {
    this.loadNavbarItems();
  }

  loadNavbarItems() {
    if (!this.usermanager.isLoggedIn()) {
      this.navbarItems = [
        { label: 'Kezdőlap', route: '/home' },
        { label: 'Éttermek', route: '/restaurants' },
        { label: 'Bejelentkezés', route: '/login' },
        { label: 'Regisztráció', route: '/register' }
      ];
    } else if (this.usermanager.getUserType() == "user") {
      this.navbarItems = [
        { label: 'Kezdőlap', route: '/home' },
        { label: 'Éttermek', route: '/restaurants' },
        { label: 'Profil', route: '/userprofile' },
        { label: 'Rendelési előzményeim', route: '/orderhistory' },
        { label: 'Kijelentkezés', route: '/logout' },
        { label: 'Kosár', route: '/cart' }
      ];
    } else if (this.usermanager.getUserType() == "admin") {
      this.navbarItems = [
        { label: 'Kezdőlap', route: '/home' },
        { label: 'Éttermek', route: '/restaurants' },
        { label: 'Profil', route: '/adminprofile' },
        { label: 'Admin Panel', route: '/admin' },
        { label: 'Rendelési előzményeim', route: '/orderhistory' },
        { label: 'Kijelentkezés', route: '/logout' },
        { label: 'Kosár', route: '/cart' }
      ];
    } else if (this.usermanager.getUserType() == "courier") {
      this.navbarItems = [
        { label: 'Kezdőlap', route: '/home' },
        { label: 'Profil', route: '/courierprofile' },
        { label: 'Rendelések', route: '/courier' },
        { label: 'Kijelentkezés', route: '/logout' }
      ];
    } else if (this.usermanager.getUserType() == "restaurantmanager") {
      this.navbarItems = [
        { label: 'Kezdőlap', route: '/home' },
        { label: 'Profil', route: '/restaurantprofile' },
        { label: 'Raktár', route: '/storage' },
        { label: 'Megrendelések', route: '/ordermanagement' },
        { label: 'Árak módosítása', route: '/modifycost' },
        { label: 'Kijelentkezés', route: '/logout' }
      ];
    }
  }

  public openRegister(): void {
    this.router.navigateByUrl("register");
  }
}