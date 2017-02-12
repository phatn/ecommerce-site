/**
 * Created by phatnguyen on 2/3/17.
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
var breadcrumbs_component_1 = require("./breadcrumbs.component");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var BreadcrumbsModule = (function () {
    function BreadcrumbsModule() {
    }
    BreadcrumbsModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                router_1.RouterModule
            ],
            declarations: [
                breadcrumbs_component_1.BreadcrumbsComponent
            ],
            exports: [
                breadcrumbs_component_1.BreadcrumbsComponent
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], BreadcrumbsModule);
    return BreadcrumbsModule;
}());
exports.BreadcrumbsModule = BreadcrumbsModule;
//# sourceMappingURL=breadcrumbs.module.js.map