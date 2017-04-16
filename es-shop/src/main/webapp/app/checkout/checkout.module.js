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
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var checkout_component_1 = require("./checkout.component");
var address_component_1 = require("./address/address.component");
var delivery_method_component_1 = require("./delivery-method/delivery-method.component");
var payment_method_component_1 = require("./payment-method/payment-method.component");
var order_review_component_1 = require("./order-review/order-review.component");
var auth_guard_service_1 = require("../core/auth-guard.service");
var router_1 = require("@angular/router");
var checkout_service_1 = require("./shared/checkout.service");
var order_confirmation_component_1 = require("./order-confirmation/order-confirmation.component");
/**
 * Created by phatnguyen on 2/26/17.
 */
var CheckoutModule = (function () {
    function CheckoutModule() {
    }
    CheckoutModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, forms_1.FormsModule, router_1.RouterModule],
            declarations: [checkout_component_1.CheckoutComponent, address_component_1.AddressComponent,
                delivery_method_component_1.DeliveryMethodComponent, payment_method_component_1.PaymentMethodComponent,
                order_review_component_1.OrderReviewComponent, order_confirmation_component_1.OrderConfirmationComponent],
            exports: [checkout_component_1.CheckoutComponent, order_confirmation_component_1.OrderConfirmationComponent],
            providers: [auth_guard_service_1.AuthGuard, checkout_service_1.CheckoutService]
        }), 
        __metadata('design:paramtypes', [])
    ], CheckoutModule);
    return CheckoutModule;
}());
exports.CheckoutModule = CheckoutModule;
//# sourceMappingURL=checkout.module.js.map