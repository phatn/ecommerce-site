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
var cart_model_1 = require("../../cart/shared/cart.model");
var checkout_service_1 = require("../shared/checkout.service");
var order_line_model_1 = require("../shared/order-line.model");
var charge_info_model_1 = require("../shared/charge-info.model");
/**
 * Created by phatnguyen on 2/26/17.
 */
var OrderReviewComponent = (function () {
    function OrderReviewComponent(order, router, cart, zone, checkoutService) {
        this.order = order;
        this.router = router;
        this.cart = cart;
        this.zone = zone;
        this.checkoutService = checkoutService;
    }
    OrderReviewComponent.prototype.placeOrder = function () {
        var _this = this;
        var orderLines = [];
        for (var _i = 0, _a = this.cart.lines; _i < _a.length; _i++) {
            var line = _a[_i];
            orderLines.push(new order_line_model_1.OrderLine(line.product, line.quantity));
        }
        this.order.orderLines = orderLines;
        this.checkoutService.placeOrder(this.order).subscribe(function (body) {
            if (body.data == true) {
                _this.processPayment();
            }
        }, function (error) {
            alert('Problem place order');
        });
    };
    OrderReviewComponent.prototype.processPayment = function () {
        if (this.order.paymentMethod == 'PAYMENT_GATEWAY') {
            this.getToken();
        }
        else {
            this.gotoOrderConfirm();
        }
    };
    OrderReviewComponent.prototype.getToken = function () {
        var _this = this;
        window.Stripe.card.createToken({
            number: this.order.card.cardNumber,
            exp_month: this.order.card.expiryMonth,
            exp_year: this.order.card.expiryYear,
            cvc: this.order.card.cvc
        }, function (status, response) {
            // Wrapping inside the Angular zone
            _this.zone.run(function () {
                if (status === 200) {
                    var chargeInfo = new charge_info_model_1.ChargeInfo(response.id, _this.cart.cartPrice, "usd", "Eshop payment");
                    _this.checkoutService.handleCharge(chargeInfo).subscribe(function (data) {
                        if (data == true) {
                            _this.gotoOrderConfirm();
                        }
                    }, function (error) {
                        alert('Problem Charge');
                    });
                }
                else {
                    alert("Error getting token");
                }
            });
        });
    };
    OrderReviewComponent.prototype.gotoOrderConfirm = function () {
        this.order.reset();
        this.cart.reset();
        this.router.navigateByUrl("/order-confirmation");
    };
    OrderReviewComponent = __decorate([
        core_1.Component({
            selector: 'eshop-checkout-order-review',
            moduleId: module.id,
            templateUrl: 'order-review.component.html'
        }), 
        __metadata('design:paramtypes', [order_model_1.Order, router_1.Router, cart_model_1.Cart, core_1.NgZone, checkout_service_1.CheckoutService])
    ], OrderReviewComponent);
    return OrderReviewComponent;
}());
exports.OrderReviewComponent = OrderReviewComponent;
//# sourceMappingURL=order-review.component.js.map