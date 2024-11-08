import { CanActivateChildFn, CanActivateFn,Router } from '@angular/router';
import { inject} from '@angular/core'
import { UsermanagerService } from "../services/usermanager.service"


export const userAuthGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const usermanagerService = inject(UsermanagerService);
  const allowedRoutesForGuest = ['/home', '/register', '/logincourier', '/loginrestaurant', '/login', '/restaurants'];
  const allowedRoutesForUser = ['/logout', '/home', '/restaurants'];
  const allowedRoutesForCourier = ['/logout', '/home'];
  const allowedRoutesForRestaurantManager = ['/logout', '/home', '/storage'];
  const allowedRoutesForAdmin = ['/logout', '/home', '/restaurants','/admin'];

  const userRole : string = usermanagerService.getUserType();

  const allowedRoutes: Record<string, string[]> = {
    guest: allowedRoutesForGuest,
    user: allowedRoutesForUser,
    courier: allowedRoutesForCourier,
    restaurantmanager: allowedRoutesForRestaurantManager,
    admin: allowedRoutesForAdmin,
  };

  const userAllowedRoutes = allowedRoutes[userRole] || [];

  if (userAllowedRoutes.some((path) => state.url.startsWith(path))) {
    return true;
  }

  if (userRole === 'courier') {
    router.navigate(['/home']);
    return false;
  } else if (userRole === 'restaurantmanager') {
    router.navigate(['/home']);
    return false;
  } else if (userRole === 'guest') {
    router.navigate(['/login']);
    return false;
  } else {
    router.navigate(['/home']);
    console.log("Rossz dologban sántikálsz")
    return false;
  }


};

export const userChildAuthGuard: CanActivateChildFn = (route, state) => { //Work in progress
  const router = inject(Router);
  const usermanagerService = inject(UsermanagerService);
  const allowedRoutesForGuest = ['/restaurants'];
  const allowedRoutesForUser = ['/restaurants'];
  const allowedRoutesForCourier = ['/home'];
  const allowedRoutesForRestaurantManager = ['/home'];
  const allowedRoutesForAdmin = ['/restaurants','/admin'];

  const userRole : string = usermanagerService.getUserType();

  const allowedRoutes: Record<string, string[]> = {
    guest: allowedRoutesForGuest,
    user: allowedRoutesForUser,
    courier: allowedRoutesForCourier,
    restaurantmanager: allowedRoutesForRestaurantManager,
    admin: allowedRoutesForAdmin,
  };

  const userAllowedRoutes = allowedRoutes[userRole] || [];


  if (userAllowedRoutes.includes(state.url)) {
    return true;
  }



  if (userRole === 'courier') {
    router.navigate(['/home']);
    return false;
  } else if (userRole === 'restaurantmanager') {
    router.navigate(['/home']);
    return false;
  } else if (userRole === 'guest') {
    router.navigate(['/login']);
    return false;
  } else {
    router.navigate(['/home']);
    console.log("Rossz dologban sántikálsz")
    return false;
  }
};
