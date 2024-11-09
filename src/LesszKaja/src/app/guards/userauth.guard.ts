import { CanActivateChildFn, CanActivateFn,Router } from '@angular/router';
import { inject} from '@angular/core'
import { UsermanagerService } from "../services/usermanager.service"


const defaultRedirects: Record<string, string> = {
  guest: '/login',
  user: '/home',
  courier: '/courierprofile',
  restaurantmanager: '/restaurantprofile',
  admin: '/home',
}

export const userAuthGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const usermanagerService = inject(UsermanagerService);
  const allowedRoutesForGuest = ['/home', '/register', '/logincourier', '/loginrestaurant', '/login', '/restaurants'];
  const allowedRoutesForUser = ['/logout', '/home', '/restaurants', '/userprofile'];
  const allowedRoutesForCourier = ['/logout', '/home', '/courierprofile', '/courier'];
  const allowedRoutesForRestaurantManager = ['/logout', '/home', '/storage','/restaurantprofile'];
  const allowedRoutesForAdmin = ['/logout', '/home', '/restaurants','/admin', '/adminprofile'];

  const userRole : string = usermanagerService.getUserType();

  const allowedRoutes: Record<string, string[]> = {
    guest: allowedRoutesForGuest,
    user: allowedRoutesForUser,
    courier: allowedRoutesForCourier,
    restaurantmanager: allowedRoutesForRestaurantManager,
    admin: allowedRoutesForAdmin,
  };

  const userAllowedRoutes = allowedRoutes[userRole] || [];
  /*if (userAllowedRoutes.some((path) => state.url.startsWith(path))) {
    return true;
  }*/

  if (userAllowedRoutes.includes(state.url)) {
    return true;
  }
  router.navigate([defaultRedirects[userRole]])
  return false;
};

export const restaurantsChildAuthGuard: CanActivateFn = (route, state) => { //Work in progress
  const router = inject(Router);
  const usermanagerService = inject(UsermanagerService);
  const userRole : string = usermanagerService.getUserType();

  const allowedRoutes: Record<string, boolean> = {
    guest: true,
    user: true,
    courier: false,
    restaurantmanager: false,
    admin: true,
  };

  if (allowedRoutes[userRole]) {
    return true
  }

  router.navigate([defaultRedirects[userRole]])
  return false;
};

export const adminChildAuthGuard: CanActivateFn = (route, state) => { //Work in progress
  const router = inject(Router);
  const usermanagerService = inject(UsermanagerService);
  const userRole : string = usermanagerService.getUserType();

  const allowedRoutes: Record<string, boolean> = {
    guest: false,
    user: false,
    courier: false,
    restaurantmanager: false,
    admin: true,
  };

  if (allowedRoutes[userRole]) {
    return true
  }

  router.navigate([defaultRedirects[userRole]])
  return false;
};
