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
/**
 * Created by phatnguyen on 2/18/17.
 */
var CartSummaryComponent = (function () {
    function CartSummaryComponent(cart, router) {
        this.cart = cart;
        this.router = router;
    }
    CartSummaryComponent.prototype.viewCartDetail = function () {
        this.router.navigateByUrl('/cart');
    };
    CartSummaryComponent = __decorate([
        core_1.Component({
            selector: 'eshop-cart-summary',
            moduleId: module.id,
            templateUrl: 'cart-summary.component.html'
        }), 
        __metadata('design:paramtypes', [cart_model_1.Cart, router_1.Router])
    ], CartSummaryComponent);
    return CartSummaryComponent;
}());
exports.CartSummaryComponent = CartSummaryComponent;
//# sourceMappingURL=cart-summary.component.js.map