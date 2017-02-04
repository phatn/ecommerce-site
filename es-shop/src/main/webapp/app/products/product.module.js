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
/**
 * Created by phatnguyen on 10/30/16.
 */
var core_1 = require('@angular/core');
var common_1 = require("@angular/common");
var product_list_component_1 = require("./product-list/product-list.component");
var product_service_1 = require("./shared/product.service");
var product_list_manufacturer_component_1 = require("./product-list-manufacturer/product-list-manufacturer.component");
var ng2_bootstrap_1 = require('ng2-bootstrap');
var forms_1 = require("@angular/forms");
var product_list_price_component_1 = require("./product-list-price/product-list-price.component");
var router_1 = require("@angular/router");
var breadcrumbs_component_1 = require("../breadcrumbs/breadcrumbs.component");
var product_list_category_component_1 = require("./product-list-category/product-list-category.component");
var ProductModule = (function () {
    function ProductModule() {
    }
    ProductModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                ng2_bootstrap_1.PaginationModule.forRoot(),
                router_1.RouterModule
            ],
            declarations: [
                product_list_component_1.ProductListComponent,
                product_list_manufacturer_component_1.ProductListManufacturerComponent,
                product_list_price_component_1.ProductListPriceComponent,
                product_list_category_component_1.ProductListCategoryComponent,
                breadcrumbs_component_1.BreadcrumbsComponent
            ],
            exports: [
                product_list_component_1.ProductListComponent,
                product_list_manufacturer_component_1.ProductListManufacturerComponent,
                product_list_price_component_1.ProductListPriceComponent,
                product_list_category_component_1.ProductListCategoryComponent
            ],
            providers: [
                product_service_1.ProductService
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], ProductModule);
    return ProductModule;
}());
exports.ProductModule = ProductModule;
//# sourceMappingURL=product.module.js.map