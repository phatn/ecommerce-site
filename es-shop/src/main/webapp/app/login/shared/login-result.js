"use strict";
/**
 * Created by phatnguyen on 3/5/17.
 */
var LoginResult = (function () {
    function LoginResult(customer, jwtToken) {
        this.customer = customer;
        this.jwtToken = jwtToken;
    }
    return LoginResult;
}());
exports.LoginResult = LoginResult;
//# sourceMappingURL=login-result.js.map