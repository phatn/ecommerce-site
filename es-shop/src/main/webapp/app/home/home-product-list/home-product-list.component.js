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
 * Created by phatnguyen on 1/26/17.
 */
var core_1 = require('@angular/core');
var product_service_1 = require("../../products/shared/product.service");
var HomeProductListComponent = (function () {
    function HomeProductListComponent(productService) {
        this.productService = productService;
    }
    HomeProductListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.productService.getNewArrivals().subscribe(function (data) {
            _this.newArrivals = data;
            _this.sortProductImages();
        }, function (error) {
            alert('Problem loading new arrivals products');
        });
    };
    HomeProductListComponent.prototype.sortProductImages = function () {
        for (var _i = 0, _a = this.newArrivals; _i < _a.length; _i++) {
            var product = _a[_i];
            product.productImages.sort(function (leftSide, rightSide) {
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
    HomeProductListComponent = __decorate([
        core_1.Component({
            selector: 'eshop-home-product-list',
            templateUrl: 'app/home/home-product-list/home-product-list.component.html'
        }), 
        __metadata('design:paramtypes', [product_service_1.ProductService])
    ], HomeProductListComponent);
    return HomeProductListComponent;
}());
exports.HomeProductListComponent = HomeProductListComponent;
//# sourceMappingURL=home-product-list.component.js.map