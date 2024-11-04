import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {
  private refreshNavbarSubject = new Subject<void>();
  refreshNavbar$ = this.refreshNavbarSubject.asObservable();

  triggerRefresh() {
    this.refreshNavbarSubject.next();
  }
}