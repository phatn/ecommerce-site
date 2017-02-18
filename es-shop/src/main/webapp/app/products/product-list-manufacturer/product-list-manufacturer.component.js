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
var page_request_1 = require("../../shared/page-request");
var product_service_1 = require("../shared/product.service");
var router_1 = require("@angular/router");
var app_settings_1 = require("../../shared/app-settings");
var breadcrumb_model_1 = require("../../breadcrumbs/shared/breadcrumb.model");
var root_breadcrumb_1 = require("../../breadcrumbs/shared/root-breadcrumb");
var ProductListManufacturerComponent = (function () {
    function ProductListManufacturerComponent(productService, route) {
        this.productService = productService;
        this.route = route;
        this.pageRequest = new page_request_1.PageRequest();
        this.totalItems = 0;
        this.itemsPerPage = app_settings_1.AppSettings.PAGE_SIZE;
        this.breadcrumbs = [];
    }
    ProductListManufacturerComponent.prototype.ngOnInit = function () {
        this.loadProductByManufacturer();
    };
    ProductListManufacturerComponent.prototype.pageChanged = function (event) {
        this.pageRequest.page = event.page;
        this.loadProductByManufacturer(false);
    };
    ProductListManufacturerComponent.prototype.loadProductByManufacturer = function (isResetPageRequest) {
        var _this = this;
        if (isResetPageRequest === void 0) { isResetPageRequest = true; }
        this.route.params
            .switchMap(function (params) {
            if (isResetPageRequest) {
                _this.pageRequest.reset();
                _this.buildBreadcrumbs(params['catSefUrl'], params['manuSefUrl']);
            }
            return _this.productService.
                getByManufacturerInCategory(params['catSefUrl'], params['manuSefUrl'], _this.pageRequest);
        })
            .subscribe(function (body) {
            _this.products = body.data;
            _this.totalItems = body.totalItems;
        });
    };
    ProductListManufacturerComponent.prototype.buildBreadcrumbs = function (catSefUrl, manuSefUrl) {
        this.breadcrumbs = [];
        this.breadcrumbs.push(root_breadcrumb_1.rootBreadCrumb);
        this.breadcrumbs.push(new breadcrumb_model_1.Breadcrumb("products/category/" + catSefUrl, catSefUrl.replace("-", " ")));
        this.breadcrumbs.push(new breadcrumb_model_1.Breadcrumb("", manuSefUrl.replace("-", " "), true));
    };
    ProductListManufacturerComponent = __decorate([
        core_1.Component({
            selector: 'eshop-product-list-manufacturer',
            moduleId: module.id,
            templateUrl: 'product-list-manufacturer.component.html'
        }), 
        __metadata('design:paramtypes', [product_service_1.ProductService, router_1.ActivatedRoute])
    ], ProductListManufacturerComponent);
    return ProductListManufacturerComponent;
}());
exports.ProductListManufacturerComponent = ProductListManufacturerComponent;
//# sourceMappingURL=product-list-manufacturer.component.js.map