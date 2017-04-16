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
var card_model_1 = require("../shared/card.model");
/**
 * Created by phatnguyen on 2/26/17.
 */
var PaymentMethodComponent = (function () {
    function PaymentMethodComponent(order, router) {
        this.order = order;
        this.router = router;
        this.card = new card_model_1.Card();
    }
    PaymentMethodComponent.prototype.toOrderReview = function () {
        if (!this.enableToOrderReview()) {
            alert("Please choose payment method or fill out the card payment detail");
        }
        else {
            this.order.card = this.card;
            this.router.navigateByUrl("/checkout/order-review");
        }
    };
    PaymentMethodComponent.prototype.enableToOrderReview = function () {
        if (!this.order.paymentMethod) {
            return false;
        }
        if (this.order.paymentMethod != 'PAYMENT_GATEWAY') {
            return true;
        }
        else if (this.card.holderName.trim() != ''
            && this.card.cardNumber.trim() != '' && this.card.cvc.trim() != ''
            && this.card.expiryMonth.trim() != '' && this.card.expiryYear.trim() != '') {
            return true;
        }
        return false;
    };
    PaymentMethodComponent = __decorate([
        core_1.Component({
            selector: 'eshop-checkout-payment-method',
            moduleId: module.id,
            templateUrl: 'payment-method.component.html',
            styleUrls: ['payment-method.component.css']
        }), 
        __metadata('design:paramtypes', [order_model_1.Order, router_1.Router])
    ], PaymentMethodComponent);
    return PaymentMethodComponent;
}());
exports.PaymentMethodComponent = PaymentMethodComponent;
//# sourceMappingURL=payment-method.component.js.map