"use strict";
/**
 * Created by phatnguyen on 3/18/17.
 */
var ChargeInfo = (function () {
    function ChargeInfo(token, amount, currency, description) {
        this.token = token;
        this.amount = amount;
        this.currency = currency;
        this.description = description;
    }
    return ChargeInfo;
}());
exports.ChargeInfo = ChargeInfo;
//# sourceMappingURL=charge-info.model.js.map