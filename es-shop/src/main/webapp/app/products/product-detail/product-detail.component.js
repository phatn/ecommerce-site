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
var product_service_1 = require("../shared/product.service");
var router_1 = require("@angular/router");
var breadcrumb_model_1 = require("../../breadcrumbs/shared/breadcrumb.model");
var root_breadcrumb_1 = require("../../breadcrumbs/shared/root-breadcrumb");
var cart_model_1 = require("../../cart/shared/cart.model");
var ProductDetailComponent = (function () {
    function ProductDetailComponent(productService, route, cart) {
        this.productService = productService;
        this.route = route;
        this.cart = cart;
        this.breadcrumbs = [];
    }
    ProductDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            if (params['prodSefUrl'] !== undefined) {
                _this.sefUrl = params['prodSefUrl'];
                _this.loadProductDetail();
                _this.loadProductRelationships();
            }
        });
    };
    ProductDetailComponent.prototype.getHightlightAttributes = function () {
        var attributes = [];
        if (!this.product || !this.product.attributes) {
            return attributes;
        }
        for (var _i = 0, _a = this.product.attributes; _i < _a.length; _i++) {
            var att = _a[_i];
            if (att.highlight) {
                attributes.push(att);
            }
        }
        return attributes;
    };
    ProductDetailComponent.prototype.buildBreadcrumbs = function (catSefUrl) {
        this.breadcrumbs = [];
        this.breadcrumbs.push(root_breadcrumb_1.rootBreadCrumb);
        this.breadcrumbs.push(new breadcrumb_model_1.Breadcrumb("products/category/" + catSefUrl, catSefUrl.replace("-", " ")));
    };
    ProductDetailComponent.prototype.loadProductDetail = function () {
        var _this = this;
        this.productService.getBySefUrl(this.sefUrl)
            .subscribe(function (data) {
            _this.buildBreadcrumbs(data.category.sefUrl);
            return _this.product = data;
        }, function (error) {
            alert('Problem loading product detail');
        });
    };
    ProductDetailComponent.prototype.loadProductRelationships = function () {
        var _this = this;
        this.productService.getRelationshipsBySefUrl(this.sefUrl)
            .subscribe(function (data) { return _this.relatedProducts = data; }),
            function (error) {
                alert('Problem loading product relationships');
            };
    };
    ProductDetailComponent.prototype.addToCart = function (product) {
        this.cart.addLine(product);
    };
    ProductDetailComponent = __decorate([
        core_1.Component({
            selector: 'eshop-product-detail',
            moduleId: module.id,
            templateUrl: 'product-detail.component.html'
        }), 
        __metadata('design:paramtypes', [product_service_1.ProductService, router_1.ActivatedRoute, cart_model_1.Cart])
    ], ProductDetailComponent);
    return ProductDetailComponent;
}());
exports.ProductDetailComponent = ProductDetailComponent;
//# sourceMappingURL=product-detail.component.js.map