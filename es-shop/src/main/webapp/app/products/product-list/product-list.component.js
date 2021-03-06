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
var cart_model_1 = require("../../cart/shared/cart.model");
var ProductListComponent = (function () {
    function ProductListComponent(cart) {
        this.cart = cart;
        this.products = [];
    }
    ProductListComponent.prototype.addToCart = function (product) {
        this.cart.addLine(product);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], ProductListComponent.prototype, "products", void 0);
    ProductListComponent = __decorate([
        core_1.Component({
            selector: 'eshop-product-list',
            moduleId: module.id,
            templateUrl: 'product-list.component.html'
        }), 
        __metadata('design:paramtypes', [cart_model_1.Cart])
    ], ProductListComponent);
    return ProductListComponent;
}());
exports.ProductListComponent = ProductListComponent;
//# sourceMappingURL=product-list.component.js.map