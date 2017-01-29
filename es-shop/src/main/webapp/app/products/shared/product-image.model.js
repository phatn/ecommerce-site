"use strict";
/**
 * Created by phatnguyen on 1/15/17.
 */
var ProductImage = (function () {
    function ProductImage(id, name, image, thumbnail, imageSize, sortOrder) {
        this.id = id;
        this.name = name;
        this.image = image;
        this.thumbnail = thumbnail;
        this.imageSize = imageSize;
        this.sortOrder = sortOrder;
    }
    return ProductImage;
}());
exports.ProductImage = ProductImage;
//# sourceMappingURL=product-image.model.js.map