import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsermanagerService {

  constructor() {

  }

  isLoggedIn() {
    return typeof localStorage !== 'undefined' && localStorage !== null && localStorage.length!=0;
  }

  getUserType() {
    return localStorage["tipus"];
  }

  logOut() {
    localStorage.clear();
  }


}
