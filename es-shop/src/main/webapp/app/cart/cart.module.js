/**
 * Created by phatnguyen on 2/15/17.
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
var core_1 = require('@angular/core');
var cart_summary_component_1 = require("./cart-summary/cart-summary.component");
var common_1 = require("@angular/common");
var cart_detail_component_1 = require("./cart-detail/cart-detail.component");
var forms_1 = require("@angular/forms");
var breadcrumbs_module_1 = require("../breadcrumbs/breadcrumbs.module");
var CartModule = (function () {
    function CartModule() {
    }
    CartModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, forms_1.FormsModule, breadcrumbs_module_1.BreadcrumbsModule],
            declarations: [cart_summary_component_1.CartSummaryComponent, cart_detail_component_1.CartDetailComponent],
            exports: [cart_summary_component_1.CartSummaryComponent, cart_detail_component_1.CartDetailComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], CartModule);
    return CartModule;
}());
exports.CartModule = CartModule;
//# sourceMappingURL=cart.module.js.map