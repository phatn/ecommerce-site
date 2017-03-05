/**
 * Created by phatnguyen on 2/26/17.
 */

import {Component, OnInit} from "@angular/core";
import {CustomerService} from "../customers/shared/customer.service";
import {CookieService} from 'angular2-cookie/core';
import {AppSettings} from "../shared/app-settings";
import {ActivatedRoute, Router} from "@angular/router";
import {Customer} from "../customers/shared/customer.model";
import {Order} from "../checkout/shared/order.model";

@Component({
    selector: 'eshop-login',
    moduleId: module.id,
    templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {

    email: string;

    password: string;

    errorLogin: string;

    returnUrl: string;

    customer: Customer;

    constructor(private customerService: CustomerService,
                private cookieService: CookieService,
                private route: ActivatedRoute,
                private router: Router,
                private order: Order) {}


    ngOnInit() {
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }
    login() {
        this.errorLogin = null;
        this.customerService.login(this.email, this.password).subscribe(body => {
            if(body.error != null) {
                this.errorLogin = "Login failed";
            } else if(body.data != null){
                this.order.customer = body.data.customer;
                this.cookieService.put(AppSettings.CUSTOMER_JWT_TOKEN_KEY, body.data.jwtToken);
                this.router.navigate([this.returnUrl]);
            } else {
                this.errorLogin = "Unknown error";
            }
        });
    }

}