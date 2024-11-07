import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
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
