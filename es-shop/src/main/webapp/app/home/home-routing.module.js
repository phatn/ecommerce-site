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
 * Created by phatnguyen on 1/21/17.
 */
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var category_list_component_1 = require("../categories/category-list/category-list.component");
var home_component_1 = require("./home.component");
var category_detail_component_1 = require("../categories/category-detail/category-detail.component");
var home_product_list_component_1 = require("./home-product-list/home-product-list.component");
var homeRoutes = [
    // { path: '', component: HomeComponent }
    { path: '', component: home_component_1.HomeComponent,
        children: [
            { path: '', component: home_product_list_component_1.HomeProductListComponent },
            { path: 'samsung', component: category_list_component_1.CategoryListComponent },
            { path: 'sony', component: category_detail_component_1.CategoryDetailComponent }
        ]
    }
];
var HomeRoutingModule = (function () {
    function HomeRoutingModule() {
    }
    HomeRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forChild(homeRoutes)
            ],
            exports: [
                router_1.RouterModule
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], HomeRoutingModule);
    return HomeRoutingModule;
}());
exports.HomeRoutingModule = HomeRoutingModule;
//# sourceMappingURL=home-routing.module.js.map