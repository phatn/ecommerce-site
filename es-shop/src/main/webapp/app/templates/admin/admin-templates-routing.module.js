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
/**
 * Created by phatnguyen on 4/8/17.
 */
var adminTemplatesRoutes = [
    { path: 'admin', component: AdminTemplatesComponent,
        children: [
            { path: '', component: AdminHomeComponent },
            { path: 'products/category/:catSefUrl', component: ProductListCategoryComponent },
            { path: 'products/category/:catSefUrl/manufacturer/:manuSefUrl', component: ProductListManufacturerComponent },
            { path: 'products/category/:catSefUrl/price/:name', component: ProductListPriceComponent },
            { path: 'product/:prodSefUrl', component: ProductDetailComponent },
            { path: 'cart', component: CartDetailComponent },
            { path: 'order-confirmation', component: OrderConfirmationComponent },
        ]
    }
];
var AdminTemplatesRoutingModule = (function () {
    function AdminTemplatesRoutingModule() {
    }
    AdminTemplatesRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forChild(adminTemplatesRoutes)
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AdminTemplatesRoutingModule);
    return AdminTemplatesRoutingModule;
}());
exports.AdminTemplatesRoutingModule = AdminTemplatesRoutingModule;
//# sourceMappingURL=admin-templates-routing.module.js.map