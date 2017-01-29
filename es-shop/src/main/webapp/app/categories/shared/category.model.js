"use strict";
var Category = (function () {
    function Category(id, sortOrder, available, depth, code, parent, categories, descriptions, products, priceRanges) {
        this.id = id;
        this.sortOrder = sortOrder;
        this.available = available;
        this.depth = depth;
        this.code = code;
        this.parent = parent;
        this.categories = categories;
        this.descriptions = descriptions;
        this.products = products;
        this.priceRanges = priceRanges;
    }
    return Category;
}());
exports.Category = Category;
//# sourceMappingURL=category.model.js.map