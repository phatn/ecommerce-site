/**
 * Created by phatnguyen on 2/26/17.
 */

import {Injectable} from '@angular/core';
import {CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';

import {CookieService} from 'angular2-cookie/core';
import {AppSettings} from "../shared/app-settings";

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router,
                private cookieService: CookieService) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

        if(this.cookieService.get(AppSettings.CUSTOMER_JWT_TOKEN_KEY) != undefined) {
            return true;
        }

        // not logged in so redirect to login page
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
        return false;
    }
}
