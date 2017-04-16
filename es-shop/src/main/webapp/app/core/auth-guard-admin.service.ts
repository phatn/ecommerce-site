import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {CookieService} from "angular2-cookie/core";
import {AppSettings} from "../shared/app-settings";
/**
 * Created by phatnguyen on 4/8/17.
 */
@Injectable()
export class AuthGuardAdmin implements CanActivate {

    constructor(private router: Router,
                private cookieService: CookieService) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

        if(this.cookieService.get(AppSettings.ADMIN_JWT_TOKEN_KEY) != undefined) {
            return true;
        }

        // not logged in so redirect to login page
        this.router.navigate(['/admin/login'], { queryParams: { returnUrl: state.url }});
        return false;
    }
}