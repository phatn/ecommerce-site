/**
 * Created by phatnguyen on 1/16/17.
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
var category_list_component_1 = require("./category-list/category-list.component");
var category_service_1 = require("./shared/category.service");
var category_detail_component_1 = require("./category-detail/category-detail.component");
var CategoryModule = (function () {
    function CategoryModule() {
    }
    CategoryModule = __decorate([
        core_1.NgModule({
            declarations: [
                category_list_component_1.CategoryListComponent,
                category_detail_component_1.CategoryDetailComponent
            ],
            exports: [
                category_list_component_1.CategoryListComponent,
                category_detail_component_1.CategoryDetailComponent
            ],
            providers: [
                category_service_1.CategoryService
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], CategoryModule);
    return CategoryModule;
}());
exports.CategoryModule = CategoryModule;
//# sourceMappingURL=category.module.js.map