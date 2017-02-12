/**
 * Created by phatnguyen on 1/15/17.
 */
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
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var base_service_1 = require("../../shared/base.service");
var PRODUCT_GET_NEW_ARRIVALS_URL = 'api/products/new-arrivals';
var PRODUCT_GET_BY_MANUFACTURER_IN_CATEGORY_URL = 'api/products/category';
var PRODUCT_GET_BY_PRICE_IN_CATEGORY_URL = 'api/products/category';
var PRODUCT_GET_BY_CATEGORY_URL = 'api/products/category';
var PRODUCT_GET_BY_SEF_URL_URL = 'api/products';
var PRODUCT_GET_RELATIONSHIPS_BY_SEF_URL_URL = 'api/products';
var ProductService = (function (_super) {
    __extends(ProductService, _super);
    function ProductService(http) {
        _super.call(this);
        this.http = http;
    }
    ProductService.prototype.getNewArrivals = function () {
        var _this = this;
        return this.http.get(PRODUCT_GET_NEW_ARRIVALS_URL)
            .map(function (res) { return _this.extractData(res); })
            .catch(this.handleError);
    };
    ProductService.prototype.getByManufacturerInCategory = function (catSefUrl, manuSelUrl, pageRequest) {
        var _this = this;
        return this.http.get(PRODUCT_GET_BY_MANUFACTURER_IN_CATEGORY_URL + "/" + catSefUrl + "/manufacturer/" + manuSelUrl + "/page/" + pageRequest.page + "/size/" + pageRequest.size)
            .map(function (res) { return _this.extractBody(res); })
            .catch(this.handleError);
    };
    ProductService.prototype.getByPriceInCategory = function (catSefUrl, name, pageRequest) {
        var _this = this;
        return this.http.get(PRODUCT_GET_BY_PRICE_IN_CATEGORY_URL + "/" + catSefUrl + "/price/" + name + "/page/" + pageRequest.page + "/size/" + pageRequest.size)
            .map(function (res) { return _this.extractBody(res); })
            .catch(this.handleError);
    };
    ProductService.prototype.getByCategory = function (catSefUrl, pageRequest) {
        var _this = this;
        return this.http.get(PRODUCT_GET_BY_CATEGORY_URL + "/" + catSefUrl + "/page/" + pageRequest.page + "/size/" + pageRequest.size)
            .map(function (res) { return _this.extractBody(res); })
            .catch(this.handleError);
    };
    ProductService.prototype.getBySefUrl = function (prodSefUrl) {
        var _this = this;
        return this.http.get(PRODUCT_GET_BY_SEF_URL_URL + "/" + prodSefUrl)
            .map(function (res) { return _this.extractData(res); })
            .catch(this.handleError);
    };
    ProductService.prototype.getRelationshipsBySefUrl = function (prodSefUrl) {
        var _this = this;
        return this.http.get(PRODUCT_GET_RELATIONSHIPS_BY_SEF_URL_URL + "/" + prodSefUrl + "/relationships")
            .map(function (res) { return _this.extractData(res); })
            .catch(this.handleError);
    };
    ProductService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], ProductService);
    return ProductService;
}(base_service_1.BaseService));
exports.ProductService = ProductService;
//# sourceMappingURL=product.service.js.map