import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChild, Router, RouterStateSnapshot } from '@angular/router';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivateChild {

  redirectUrl = 'home';

  constructor(
      private api: ApiService,
      private router: Router
  ) { }

  canActivateChild(
      childRoute: ActivatedRouteSnapshot,
      state: RouterStateSnapshot): boolean | Promise<boolean> {

      if (this.isLoggedIn()) return true;

      this.redirectUrl = state.url;

      return this.router.navigate(['login']);
  }

  isLoggedIn(): boolean {
    const token = this.api.getToken();    
    return (token && token.length > 0) ? true : false; 
  }
}
