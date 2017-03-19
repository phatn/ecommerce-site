/**
 * Created by phatnguyen on 1/31/17.
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
var router_1 = require("@angular/router");
var core_1 = require("@angular/core");
var templates_component_1 = require("./templates.component");
var home_component_1 = require("../../home/home.component");
var product_list_price_component_1 = require("../../products/product-list-price/product-list-price.component");
var product_list_manufacturer_component_1 = require("../../products/product-list-manufacturer/product-list-manufacturer.component");
var product_list_category_component_1 = require("../../products/product-list-category/product-list-category.component");
var product_detail_component_1 = require("../../products/product-detail/product-detail.component");
var cart_detail_component_1 = require("../../cart/cart-detail/cart-detail.component");
var order_confirmation_component_1 = require("../../checkout/order-confirmation/order-confirmation.component");
var templatesRoutes = [
    { path: '', component: templates_component_1.TemplatesComponent,
        children: [
            { path: '', component: home_component_1.HomeComponent },
            { path: 'products/category/:catSefUrl', component: product_list_category_component_1.ProductListCategoryComponent },
            { path: 'products/category/:catSefUrl/manufacturer/:manuSefUrl', component: product_list_manufacturer_component_1.ProductListManufacturerComponent },
            { path: 'products/category/:catSefUrl/price/:name', component: product_list_price_component_1.ProductListPriceComponent },
            { path: 'product/:prodSefUrl', component: product_detail_component_1.ProductDetailComponent },
            { path: 'cart', component: cart_detail_component_1.CartDetailComponent },
            { path: 'order-confirmation', component: order_confirmation_component_1.OrderConfirmationComponent },
        ]
    }
];
var TemplatesRoutingModule = (function () {
    function TemplatesRoutingModule() {
    }
    TemplatesRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forChild(templatesRoutes)
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], TemplatesRoutingModule);
    return TemplatesRoutingModule;
}());
exports.TemplatesRoutingModule = TemplatesRoutingModule;
//# sourceMappingURL=templates-routing.module.js.map