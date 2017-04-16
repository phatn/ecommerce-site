/**
 * Created by phatnguyen on 2/15/17.
 */
"use strict";
var CartLine = (function () {
    function CartLine(product, quantity) {
        this.product = product;
        this.quantity = quantity;
    }
    CartLine.prototype.getLineTotal = function () {
        if (this.product.salePrice) {
            return this.quantity * this.product.salePrice;
        }
        return this.quantity * this.product.price;
    };
    return CartLine;
}());
exports.CartLine = CartLine;
//# sourceMappingURL=cart-line.model.js.map