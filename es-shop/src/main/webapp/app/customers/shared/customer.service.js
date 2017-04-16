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
/**
 * Created by phatnguyen on 2/28/17.
 */
var CUSTOMER_LOGIN_URL = 'api/customers/login';
var CustomerService = (function (_super) {
    __extends(CustomerService, _super);
    function CustomerService(http) {
        _super.call(this);
        this.http = http;
    }
    CustomerService.prototype.login = function (email, password) {
        var _this = this;
        return this.http.post(CUSTOMER_LOGIN_URL, { email: email, password: password }, base_service_1.BaseService.options)
            .map(function (res) { return _this.extractBody(res); })
            .catch(this.handleError);
    };
    CustomerService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], CustomerService);
    return CustomerService;
}(base_service_1.BaseService));
exports.CustomerService = CustomerService;
//# sourceMappingURL=customer.service.js.map