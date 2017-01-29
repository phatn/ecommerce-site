"use strict";
/**
 * Created by phatnguyen on 1/15/17.
 */
var PriceRange = (function () {
    function PriceRange(id, name, firstPrice, secondPrice, sortOrder) {
        this.id = id;
        this.name = name;
        this.firstPrice = firstPrice;
        this.secondPrice = secondPrice;
        this.sortOrder = sortOrder;
    }
    return PriceRange;
}());
exports.PriceRange = PriceRange;
//# sourceMappingURL=price-range.model.js.map