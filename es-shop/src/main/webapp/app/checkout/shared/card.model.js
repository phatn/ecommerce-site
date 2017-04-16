"use strict";
/**
 * Created by phatnguyen on 3/18/17.
 */
var Card = (function () {
    function Card(holderName, cardNumber, expiryMonth, expiryYear, cvc) {
        if (holderName === void 0) { holderName = ""; }
        if (cardNumber === void 0) { cardNumber = ""; }
        if (expiryMonth === void 0) { expiryMonth = ""; }
        if (expiryYear === void 0) { expiryYear = ""; }
        if (cvc === void 0) { cvc = ""; }
        this.holderName = holderName;
        this.cardNumber = cardNumber;
        this.expiryMonth = expiryMonth;
        this.expiryYear = expiryYear;
        this.cvc = cvc;
    }
    return Card;
}());
exports.Card = Card;
//# sourceMappingURL=card.model.js.map