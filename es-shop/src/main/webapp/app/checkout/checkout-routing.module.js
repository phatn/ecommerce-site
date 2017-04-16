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
var router_1 = require("@angular/router");
var checkout_component_1 = require("./checkout.component");
var address_component_1 = require("./address/address.component");
var delivery_method_component_1 = require("./delivery-method/delivery-method.component");
var payment_method_component_1 = require("./payment-method/payment-method.component");
var order_review_component_1 = require("./order-review/order-review.component");
var auth_guard_service_1 = require("../core/auth-guard.service");
/**
 * Created by phatnguyen on 2/26/17.
 */
var checkoutRoutes = [
    { path: 'checkout', component: checkout_component_1.CheckoutComponent,
        canActivate: [auth_guard_service_1.AuthGuard],
        children: [
            { path: 'address', component: address_component_1.AddressComponent },
            { path: 'delivery-method', component: delivery_method_component_1.DeliveryMethodComponent },
            { path: 'payment-method', component: payment_method_component_1.PaymentMethodComponent },
            { path: 'order-review', component: order_review_component_1.OrderReviewComponent },
            { path: '', redirectTo: 'address', pathMatch: 'full' },
        ]
    }
];
var CheckoutRoutingModule = (function () {
    function CheckoutRoutingModule() {
    }
    CheckoutRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forChild(checkoutRoutes)
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], CheckoutRoutingModule);
    return CheckoutRoutingModule;
}());
exports.CheckoutRoutingModule = CheckoutRoutingModule;
//# sourceMappingURL=checkout-routing.module.js.map