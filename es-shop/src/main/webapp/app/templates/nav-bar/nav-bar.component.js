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
var category_service_1 = require('app/categories/shared/category.service');
var NavBarComponent = (function () {
    function NavBarComponent(categoryService) {
        this.categoryService = categoryService;
        this.categories = [];
    }
    NavBarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.categoryService.getCategories().subscribe(function (data) {
            _this.categories = data;
            _this.sortPriceRanges();
        }, function (error) {
            alert('Problem loading categories');
        });
    };
    NavBarComponent.prototype.sortPriceRanges = function () {
        for (var _i = 0, _a = this.categories; _i < _a.length; _i++) {
            var cat = _a[_i];
            cat.priceRanges.sort(function (leftSide, rightSide) {
                if (leftSide.sortOrder < rightSide.sortOrder) {
                    return -1;
                }
                else if (leftSide.sortOrder > rightSide.sortOrder) {
                    return 1;
                }
                return 0;
            });
        }
    };
    NavBarComponent = __decorate([
        core_1.Component({
            selector: 'eshop-nav-bar',
            templateUrl: 'app/templates/nav-bar/nav-bar.component.html'
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof category_service_1.CategoryService !== 'undefined' && category_service_1.CategoryService) === 'function' && _a) || Object])
    ], NavBarComponent);
    return NavBarComponent;
    var _a;
}());
exports.NavBarComponent = NavBarComponent;
//# sourceMappingURL=nav-bar.component.js.map