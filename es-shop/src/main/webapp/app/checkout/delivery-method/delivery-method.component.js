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
var order_model_1 = require("../shared/order.model");
var router_1 = require("@angular/router");
/**
 * Created by phatnguyen on 2/26/17.
 */
var DeliveryMethodComponent = (function () {
    function DeliveryMethodComponent(order, router) {
        this.order = order;
        this.router = router;
    }
    DeliveryMethodComponent.prototype.toPaymentMethod = function () {
        this.router.navigateByUrl("/checkout/payment-method");
    };
    DeliveryMethodComponent = __decorate([
        core_1.Component({
            selector: 'eshop-checkout-delivery-method',
            moduleId: module.id,
            templateUrl: 'delivery-method.component.html'
        }), 
        __metadata('design:paramtypes', [order_model_1.Order, router_1.Router])
    ], DeliveryMethodComponent);
    return DeliveryMethodComponent;
}());
exports.DeliveryMethodComponent = DeliveryMethodComponent;
//# sourceMappingURL=delivery-method.component.js.map