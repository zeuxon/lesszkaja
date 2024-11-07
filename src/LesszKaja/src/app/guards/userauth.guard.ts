import { CanActivateChildFn, CanActivateFn,Router } from '@angular/router';
import { inject} from '@angular/core'
import { UsermanagerService } from "../services/usermanager.service"
import { stat } from 'fs';


export const userAuthGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const allowedRoutesForVisitor = ['/home', '/register', '/restaurants', '/logincourier', '/loginrestaurant', '/login'];
  const allowedRoutesForUser = ['/logout', '/home', '/restaurants', '/restaurant/:nev/:cim'];
  const allowedRoutesForCourier = ['/logout', '/home', '/restaurants', '/restaurant/:nev/:cim'];
  const allowedRoutesForRestaurantManager = ['/logout', '/home', '/restaurants', '/storage', '/restaurant/:nev/:cim'];
  const allowedRoutesForAdmin = ['/logout', '/home', '/restaurants', '/restaurant/:nev/:cim', '/admin'];
  const userManagerService = new UsermanagerService;

  const isUserLoggedIn = userManagerService.isLoggedIn();
  const userRole = userManagerService.getUserType();

  if (!isUserLoggedIn && !allowedRoutesForVisitor.includes(state.url)) {
    // Redirect to login if user is not logged in
    router.navigate(['/login']);
    console.log("Jelentkezz be peasant")
    return false;
  } else if (!isUserLoggedIn && allowedRoutesForVisitor.includes(state.url)) {
    return true;
  }

  // Check if user role is 'default' and if the route is allowed
  if (userRole === 'user' && allowedRoutesForUser.includes(state.url)) {
    console.log("Ügyi vagy! <3 UWU")
    return true;
  } else if (userRole === 'courier' && allowedRoutesForCourier.includes(state.url)) {
    console.log("Ügyi vagy! <3 UWU")
    return true;
  } else if (userRole === 'restaurantmanager' && allowedRoutesForRestaurantManager.includes(state.url)) {
    console.log("Ügyi vagy! <3 UWU")
    return true;
  } else if (userRole === 'admin' && allowedRoutesForAdmin.includes(state.url)) {
    console.log("Ügyi vagy! <3 UWU")
    return true;
  } else if (userRole === 'courier') {
    router.navigate(['/home']);
    return false;
  } else if (userRole === 'restaurantmanager') {
    router.navigate(['/home']);
    return false;
  }

  // If not allowed, redirect to home or another route
  router.navigate(['/home']);
  console.log("Rossz dologban sántikálsz")
  return true;
};
