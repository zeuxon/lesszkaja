import { Routes } from '@angular/router';
import { LogoutComponent } from './logout/logout.component';
import { userAuthGuard, restaurantsChildAuthGuard, adminChildAuthGuard, restaurantOrderGuard} from '../app/guards/userauth.guard';

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
        canActivate:[userAuthGuard]
      },
      {
        path: "logincourier",
        loadComponent: () => import("./users/visitor/logincourier/logincourier.component").then(c => c.LogincourierComponent),
        canActivate:[userAuthGuard]
      },
      {
        path:"logout",
        component: LogoutComponent,
        canActivate:[userAuthGuard]
      },
      {
        path: "cart",
        loadComponent: () => import("./users/user/client/shopping-cart/shopping-cart.component").then(c => c.ShoppingCartComponent),
      },
      {
        path:"admin",
        canActivate:[userAuthGuard],
        children:[
          {
            path:'',
            loadComponent: () => import("./users/user/admin/admin.component").then(c => c.AdminComponent),
            canActivate:[adminChildAuthGuard],
          },
          {
            path:"registercouriers",
            loadComponent: () => import("./users/user/admin/registercourier/registercourier.component").then(c => c.RegistercourierComponent),
            canActivate:[adminChildAuthGuard],
          },
          {
            path:"registerrestaurants",
            loadComponent: () => import("./users/user/admin/registerrestaurant/registerrestaurant.component").then(c => c.RegisterrestaurantComponent),
            canActivate:[adminChildAuthGuard],
          },
          {
            path:"registerusers",
            loadComponent: () => import("./users/user/admin/registeruser/registeruser.component").then(c => c.RegisteruserComponent),
            canActivate:[adminChildAuthGuard],
          },
          {
            path:"modifyusers",
            loadComponent: () => import("./users/user/admin/modifyuser/modifyuser.component").then(c => c.ModifyuserComponent),
            canActivate:[adminChildAuthGuard],
          },
          {
            path:"modifyrestaurants",
            loadComponent: () => import("./users/user/admin/modifyrestaurant/modifyrestaurant.component").then(c => c.ModifyrestaurantComponent),
            canActivate:[adminChildAuthGuard],
          },
          {
            path:"modifycouriers",
            loadComponent: () => import("./users/user/admin/modifycourier/modifycourier.component").then(c => c.ModifycourierComponent),
            canActivate:[adminChildAuthGuard],
          }
        ]
      },
      {
        path: "restaurants",
        children:[
          {
            path:"",
            loadComponent: () => import("./restaurantslist/restaurantslist.component").then(c => c.RestaurantslistComponent),
            canActivate:[userAuthGuard]
          },
          {
            path:":etterem_id",
            children:[
              {
                path:"",
                canActivate:[restaurantsChildAuthGuard],
                loadComponent: () => import("./restaurant/restaurant.component").then(c => c.RestaurantComponent),
              },
              {
                path:":termek_id",
                canActivate:[restaurantOrderGuard],
                loadComponent: () => import("./restaurant/item/item.component").then(c => c.ItemComponent),
              },
            ]
          }
          /*
          {
            path:":nev/:cim",
            loadComponent: () => import("./restaurant/restaurant.component").then(c => c.RestaurantComponent),
            canActivate:[restaurantsChildAuthGuard],
          },
          {
            path:":nev/:cim/:termek",
            loadComponent: () => import("./restaurant/item/item.component").then(c => c.ItemComponent),
            canActivate:[restaurantsChildAuthGuard],
          },
          {
            path:"",
            loadComponent: () => import("./restaurantslist/restaurantslist.component").then(c => c.RestaurantslistComponent),
            canActivate:[userAuthGuard]
          }
            */
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
      {
        path: "courier",
        loadComponent: () => import("./users/user/courier/courier.component").then(c => c.CourierComponent),
        canActivate:[userAuthGuard]
      },
      {
        path: 'courier/assignedorders',
        loadComponent: () => import("./users/user/courier/assignedorders/assignedorders.component").then(c => c.AssignedordersComponent),
        canActivate:[userAuthGuard]
      },
      {
        path: 'courier/unassignedorders',
        loadComponent: () => import("./users/user/courier/unassignedorders/unassignedorders.component").then(c => c.UnassignedordersComponent),
        canActivate:[userAuthGuard]
      },
      {
        path: 'ordermanagement',
        loadComponent: () => import("./users/user/restaurant-manager/order-management/order-management.component").then(c => c.OrderManagementComponent),
        canActivate:[userAuthGuard]
      },

      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: '**', redirectTo: 'home' }
];
