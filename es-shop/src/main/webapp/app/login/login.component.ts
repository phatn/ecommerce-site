/**
 * Created by phatnguyen on 2/26/17.
 */

import {Component, OnInit} from "@angular/core";
import {CustomerService} from "../customers/shared/customer.service";
import {Customer} from "../customers/shared/customer.model";
import {CookieService} from 'angular2-cookie/core';
import {AppSettings} from "../shared/app-settings";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
    selector: 'eshop-login',
    moduleId: module.id,
    templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {

    customer: Customer = new Customer();

    errorLogin: string;

    returnUrl: string;

    constructor(private customerService: CustomerService,
                private cookieService: CookieService,
                private route: ActivatedRoute,
                private router: Router) {}


    ngOnInit() {
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }
    login() {
        this.errorLogin = null;
        this.customerService.login(this.customer).subscribe(body => {
            if(body.error != null) {
                this.errorLogin = "Login failed";
            } else if(body.data != null){
                this.cookieService.put(AppSettings.CUSTOMER_JWT_TOKEN_KEY, body.data);
                this.router.navigate([this.returnUrl]);
            } else {
                this.errorLogin = "Unknown error";
            }
        });
    }

}