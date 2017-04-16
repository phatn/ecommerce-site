/**
 * Created by phatnguyen on 2/26/17.
 */
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var customer_service_1 = require("../customers/shared/customer.service");
var core_2 = require('angular2-cookie/core');
var app_settings_1 = require("../shared/app-settings");
var router_1 = require("@angular/router");
var order_model_1 = require("../checkout/shared/order.model");
var LoginComponent = (function () {
    function LoginComponent(customerService, cookieService, route, router, order) {
        this.customerService = customerService;
        this.cookieService = cookieService;
        this.route = route;
        this.router = router;
        this.order = order;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.errorLogin = null;
        this.customerService.login(this.email, this.password).subscribe(function (body) {
            if (body.error != null) {
                _this.errorLogin = "Login failed";
            }
            else if (body.data != null) {
                _this.order.customer = body.data.customer;
                _this.cookieService.put(app_settings_1.AppSettings.CUSTOMER_JWT_TOKEN_KEY, body.data.jwtToken);
                _this.router.navigate([_this.returnUrl]);
            }
            else {
                _this.errorLogin = "Unknown error";
            }
        });
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'eshop-login',
            moduleId: module.id,
            templateUrl: 'login.component.html'
        }), 
        __metadata('design:paramtypes', [customer_service_1.CustomerService, core_2.CookieService, router_1.ActivatedRoute, router_1.Router, order_model_1.Order])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map