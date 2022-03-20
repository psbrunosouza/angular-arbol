import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {EnsureAuthenticateService} from "../services/auth/ensure-authenticate.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private localStorage: EnsureAuthenticateService, private route: Router) {

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
    ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.localStorage.checkIsLogged()){
      return true;
    }else{
      this.route.navigate(['/auth/login']);
      this.localStorage.removeToken()
      return false;
    }
  }
}
