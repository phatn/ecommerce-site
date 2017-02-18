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
/**
 * Created by phatnguyen on 10/30/16.
 */
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
//import { FormsModule }    from '@angular/forms';
var footer_component_1 = require("./footer/footer.component");
var carousel_component_1 = require("./carousel/carousel.component");
var ng2_bootstrap_1 = require('ng2-bootstrap');
var header_component_1 = require("./header/header.component");
var nav_bar_component_1 = require("./nav-bar/nav-bar.component");
var top_component_1 = require("./top/top.component");
var templates_component_1 = require("./templates.component");
var router_1 = require("@angular/router");
var cart_summary_component_1 = require("../../cart/cart-summary/cart-summary.component");
var cart_detail_component_1 = require("../../cart/cart-detail/cart-detail.component");
var TemplatesModule = (function () {
    function TemplatesModule() {
    }
    TemplatesModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                //FormsModule
                ng2_bootstrap_1.CarouselModule.forRoot(),
                router_1.RouterModule
            ],
            declarations: [
                header_component_1.HeaderComponent,
                nav_bar_component_1.NavBarComponent,
                top_component_1.TopComponent,
                footer_component_1.FooterComponent,
                carousel_component_1.CarouselComponent,
                templates_component_1.TemplatesComponent,
                cart_detail_component_1.CartDetailComponent,
                cart_summary_component_1.CartSummaryComponent
            ],
            exports: [
                header_component_1.HeaderComponent,
                nav_bar_component_1.NavBarComponent,
                top_component_1.TopComponent,
                footer_component_1.FooterComponent,
                carousel_component_1.CarouselComponent,
                templates_component_1.TemplatesComponent
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], TemplatesModule);
    return TemplatesModule;
}());
exports.TemplatesModule = TemplatesModule;
//# sourceMappingURL=templates.module.js.map