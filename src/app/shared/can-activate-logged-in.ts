import { Router, CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { LoginService } from './login.service';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class CanActivateLoggedIn implements CanActivate, CanActivateChild {

    constructor(private loginService: LoginService, private router: Router) {
    }
    
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        return this.loginService.isLoggedIn().map((logged_in: boolean) => {
            if (!logged_in) {
                this.router.navigate(['/session/login']);
                return false;
            } else {
                return true;
            }
        });
    }

    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        return this.canActivate(route, state);
    }
}


@Injectable()
export class CanActivateNotLoggedIn implements CanActivateChild {

    constructor(private loginService: LoginService, private router: Router) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        return this.loginService.isLoggedIn().map((logged_in: boolean) => {
            if (!logged_in) {
                return true;
            }
            this.router.navigate(['']);
            return false;
        });
    }

    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        return this.canActivate(route, state);
    }
}

