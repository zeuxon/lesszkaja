import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: "home",
        loadComponent: () => import("./home/home.component").then(c => c.HomeComponent)
      },
      {
        path: "register",
        loadComponent: () => import("./users/visitor/register/register.component").then(c => c.RegisterComponent)
      },
      {
        path: "login",
        loadComponent: () => import("./users/visitor/login/login.component").then(c => c.LoginComponent)
      },
      {
        path:"logout",
        loadComponent: () => import("./users/visitor/login/login.component").then(c => c.LoginComponent)
      },
      {
        path:"admin",
        loadComponent: () => import("./users/visitor/login/login.component").then(c => c.LoginComponent)
      },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: '**', redirectTo: 'home' }
];
