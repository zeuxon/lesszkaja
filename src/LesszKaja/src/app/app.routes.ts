import { Routes } from '@angular/router';
import { LogoutComponent } from './logout/logout.component';

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
        path: "loginrestaurant",
        loadComponent: () => import("./users/visitor/loginrestaurant/loginrestaurant.component").then(c => c.LoginrestaurantComponent)
      },
      {
        path: "logincourier",
        loadComponent: () => import("./users/visitor/logincourier/logincourier.component").then(c => c.LogincourierComponent)
      },
      {
        path:"logout",
        component: LogoutComponent
      },
      {
        path:"admin",
        loadComponent: () => import("./users/visitor/login/login.component").then(c => c.LoginComponent)
      },
      {
        path: "restaurants",
        loadComponent: () => import("./restaurantslist/restaurantslist.component").then(c => c.RestaurantslistComponent)
      },
      {
        path: "restaurant/:nev/:cim",
        loadComponent: () => import("./restaurant/restaurant.component").then(c => c.RestaurantComponent)
      },
      {
        path: "storage",
        loadComponent: () => import("./restaurant/storage/storage.component").then(c => c.StorageComponent)
      },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: '**', redirectTo: 'home' }
];
