import { Routes } from '@angular/router';
import { LogoutComponent } from './logout/logout.component';
import { userAuthGuard} from '../app/guards/userauth.guard';

export const routes: Routes = [
    {
        path: "home",
        loadComponent: () => import("./home/home.component").then(c => c.HomeComponent)
      },
      {
        path: "register",
        loadComponent: () => import("./users/visitor/register/register.component").then(c => c.RegisterComponent),
        canActivate:[userAuthGuard]

      },
      {
        path: "login",
        loadComponent: () => import("./users/visitor/login/login.component").then(c => c.LoginComponent),
        canActivate:[userAuthGuard]
      },
      {
        path: "loginrestaurant",
        loadComponent: () => import("./users/visitor/loginrestaurant/loginrestaurant.component").then(c => c.LoginrestaurantComponent),
        //canActivate:[userAuthGuard]
      },
      {
        path: "logincourier",
        loadComponent: () => import("./users/visitor/logincourier/logincourier.component").then(c => c.LogincourierComponent),
        //canActivate:[userAuthGuard]
      },
      {
        path:"logout",
        component: LogoutComponent,
        canActivate:[userAuthGuard]
      },
      {
        path:"admin",

        canActivate:[userAuthGuard],
        children:[
          {
            path:'',
            loadComponent: () => import("./users/user/admin/admin.component").then(c => c.AdminComponent),
          },
          {
            path:"registerothers",
            loadComponent: () => import("./users/user/admin/registerothers/registerothers.component").then(c => c.RegisterothersComponent),
          },
        ]
      },
      {
        path: "restaurants",
        canActivate:[userAuthGuard],
        children:[
          {
            path:":nev/:cim",
            loadComponent: () => import("./restaurant/restaurant.component").then(c => c.RestaurantComponent)
          },
          {
            path:"",
            loadComponent: () => import("./restaurantslist/restaurantslist.component").then(c => c.RestaurantslistComponent)
          }
        ]
      },
      {
        path: "storage",
        loadComponent: () => import("./restaurant/storage/storage.component").then(c => c.StorageComponent),
        canActivate:[userAuthGuard]
      },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: '**', redirectTo: 'home' }
];
