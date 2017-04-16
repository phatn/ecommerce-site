/**
 * Created by phatnguyen on 2/19/17.
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
var cart_model_1 = require("../shared/cart.model");
var router_1 = require("@angular/router");
var breadcrumb_model_1 = require("../../breadcrumbs/shared/breadcrumb.model");
var root_breadcrumb_1 = require("../../breadcrumbs/shared/root-breadcrumb");
var common_1 = require("@angular/common");
var CartDetailComponent = (function () {
    function CartDetailComponent(cart, location, router) {
        this.cart = cart;
        this.location = location;
        this.router = router;
        this.breadcrumbs = [];
    }
    CartDetailComponent.prototype.ngOnInit = function () {
        this.buildBreadcrumbs();
    };
    CartDetailComponent.prototype.removeLine = function (productId) {
        this.cart.removeLine(productId);
    };
    CartDetailComponent.prototype.continueShopping = function () {
        this.location.back();
    };
    CartDetailComponent.prototype.updateQuantity = function (product, $event) {
        this.cart.updateQuantity(product, $event);
    };
    CartDetailComponent.prototype.checkout = function () {
        this.router.navigateByUrl('/checkout');
    };
    CartDetailComponent.prototype.buildBreadcrumbs = function () {
        this.breadcrumbs = [];
        this.breadcrumbs.push(root_breadcrumb_1.rootBreadCrumb);
        this.breadcrumbs.push(new breadcrumb_model_1.Breadcrumb('', 'cart', true));
    };
    CartDetailComponent = __decorate([
        core_1.Component({
            selector: 'eshop-cart-detail',
            moduleId: module.id,
            templateUrl: 'cart-detail.component.html'
        }), 
        __metadata('design:paramtypes', [cart_model_1.Cart, common_1.Location, router_1.Router])
    ], CartDetailComponent);
    return CartDetailComponent;
}());
exports.CartDetailComponent = CartDetailComponent;
//# sourceMappingURL=cart-detail.component.js.map