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
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var app_component_1 = require('./app.component');
var cookies_service_1 = require('angular2-cookie/services/cookies.service');
// Statics
require('rxjs/add/observable/throw');
// Operators
require('rxjs/add/operator/catch');
require('rxjs/add/operator/debounceTime');
require('rxjs/add/operator/distinctUntilChanged');
require('rxjs/add/operator/map');
require('rxjs/add/operator/switchMap');
require('rxjs/add/operator/toPromise');
var category_module_1 = require("./categories/category.module");
var app_routing_module_1 = require("./app-routing.module");
var home_product_list_component_1 = require("./home/home-product-list/home-product-list.component");
var templates_module_1 = require("./templates/client/templates.module");
var product_module_1 = require("./products/product.module");
var home_component_1 = require("./home/home.component");
var templates_routing_module_1 = require("./templates/client/templates-routing.module");
var cart_model_1 = require("./cart/shared/cart.model");
var login_component_1 = require("./login/login.component");
var checkout_routing_module_1 = require("./checkout/checkout-routing.module");
var checkout_module_1 = require("./checkout/checkout.module");
var register_component_1 = require("./resgister/register.component");
var customer_service_1 = require("./customers/shared/customer.service");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                app_routing_module_1.AppRoutingModule,
                templates_module_1.TemplatesModule,
                product_module_1.ProductModule,
                category_module_1.CategoryModule,
                templates_routing_module_1.TemplatesRoutingModule,
                checkout_routing_module_1.CheckoutRoutingModule,
                checkout_module_1.CheckoutModule
            ],
            declarations: [
                app_component_1.AppComponent,
                home_component_1.HomeComponent,
                home_product_list_component_1.HomeProductListComponent,
                login_component_1.LoginComponent,
                register_component_1.RegisterComponent
            ],
            providers: [cart_model_1.Cart, customer_service_1.CustomerService, cookies_service_1.CookieService],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map