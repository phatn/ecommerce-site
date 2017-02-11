"use strict";
var Product = (function () {
    function Product(id, sku, price, salePrice, sortOrder, descriptions, productImages, attributes, sefUrl, newArrivals, category) {
        this.id = id;
        this.sku = sku;
        this.price = price;
        this.salePrice = salePrice;
        this.sortOrder = sortOrder;
        this.descriptions = descriptions;
        this.productImages = productImages;
        this.attributes = attributes;
        this.sefUrl = sefUrl;
        this.newArrivals = newArrivals;
        this.category = category;
    }
    return Product;
}());
exports.Product = Product;
//# sourceMappingURL=product.model.js.map