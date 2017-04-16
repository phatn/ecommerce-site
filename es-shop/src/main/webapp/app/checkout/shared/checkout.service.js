"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
var base_service_1 = require("../../shared/base.service");
var http_1 = require("@angular/http");
var core_2 = require('angular2-cookie/core');
var app_settings_1 = require("../../shared/app-settings");
var http_2 = require('@angular/http');
/**
 * Created by phatnguyen on 3/4/17.
 */
var ORDER_CREATE_URL = 'api/orders';
var PAYMENT_URL = 'api/payments';
var CheckoutService = (function (_super) {
    __extends(CheckoutService, _super);
    function CheckoutService(http, cookieService) {
        _super.call(this);
        this.http = http;
        this.cookieService = cookieService;
    }
    CheckoutService.prototype.placeOrder = function (order) {
        var _this = this;
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        headers.append('JWT-TOKEN', this.cookieService.get(app_settings_1.AppSettings.CUSTOMER_JWT_TOKEN_KEY));
        var options = new http_2.RequestOptions({ headers: headers });
        return this.http.post(ORDER_CREATE_URL, JSON.stringify(order), options)
            .map(function (res) { return _this.extractBody(res); })
            .catch(this.handleError);
    };
    CheckoutService.prototype.handleCharge = function (chargeInfo) {
        var _this = this;
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        headers.append('JWT-TOKEN', this.cookieService.get(app_settings_1.AppSettings.CUSTOMER_JWT_TOKEN_KEY));
        var options = new http_2.RequestOptions({ headers: headers });
        return this.http.post(PAYMENT_URL, JSON.stringify(chargeInfo), options)
            .map(function (res) { return _this.extractData(res); })
            .catch(this.handleError);
    };
    CheckoutService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, core_2.CookieService])
    ], CheckoutService);
    return CheckoutService;
}(base_service_1.BaseService));
exports.CheckoutService = CheckoutService;
//# sourceMappingURL=checkout.service.js.map