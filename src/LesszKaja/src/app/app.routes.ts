import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: "main",
        loadComponent: () => import("./app.component").then(c => c.AppComponent)
      },
      {
        path: "register",
        loadComponent: () => import("./users/visitor/register/register.component").then(c => c.RegisterComponent)
      },
      { path: '', redirectTo: 'main', pathMatch: 'full' },
      { path: '**', redirectTo: 'main' }
];
