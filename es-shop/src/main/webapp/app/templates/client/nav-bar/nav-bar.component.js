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
var category_service_1 = require("../../../categories/shared/category.service");
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
    NavBarComponent.prototype.ngAfterViewInit = function () {
        jQuery('#navbar').affix({
            offset: {
                top: function () { return 300; }
            }
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
            templateUrl: 'app/templates/client/nav-bar/nav-bar.component.html'
        }), 
        __metadata('design:paramtypes', [category_service_1.CategoryService])
    ], NavBarComponent);
    return NavBarComponent;
}());
exports.NavBarComponent = NavBarComponent;
//# sourceMappingURL=nav-bar.component.js.map