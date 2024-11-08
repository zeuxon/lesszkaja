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
            path:"registercouriers",
            loadComponent: () => import("./users/user/admin/registercourier/registercourier.component").then(c => c.RegistercourierComponent),
          },
          {
            path:"registerrestaurants",
            loadComponent: () => import("./users/user/admin/registerrestaurant/registerrestaurant.component").then(c => c.RegisterrestaurantComponent),
          },
          {
            path:"registerusers",
            loadComponent: () => import("./users/user/admin/registeruser/registeruser.component").then(c => c.RegisteruserComponent),
          },
          {
            path:"modifyusers",
            loadComponent: () => import("./users/user/admin/modifyuser/modifyuser.component").then(c => c.ModifyuserComponent),
          },
          {
            path:"modifyrestaurants",
            loadComponent: () => import("./users/user/admin/modifyrestaurant/modifyrestaurant.component").then(c => c.ModifyrestaurantComponent),
          },
          {
            path:"modifycouriers",
            loadComponent: () => import("./users/user/admin/modifycourier/modifycourier.component").then(c => c.ModifycourierComponent),
          }
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
      {
        path: "userprofile",
        loadComponent: () => import("./users/user/client/userprofile/userprofile.component").then(c => c.UserprofileComponent),
        canActivate:[userAuthGuard]
      },
      {
        path: "adminprofile",
        loadComponent: () => import("./users/user/admin/adminprofile/adminprofile.component").then(c => c.AdminprofileComponent),
        canActivate:[userAuthGuard]
      },
      {
        path: "courierprofile",
        loadComponent: () => import("./users/user/courier/courierprofile/courierprofile.component").then(c => c.CourierprofileComponent),
        canActivate:[userAuthGuard]
      },
      {
        path: "restaurantprofile",
        loadComponent: () => import("./users/user/restaurant-manager/restaurantprofile/restaurantprofile.component").then(c => c.RestaurantprofileComponent),
        canActivate:[userAuthGuard]
      },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: '**', redirectTo: 'home' }
];
