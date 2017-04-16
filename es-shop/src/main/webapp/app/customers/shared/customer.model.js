"use strict";
/**
 * Created by phatnguyen on 2/28/17.
 */
var Customer = (function () {
    function Customer(id, firstName, lastName, email, userName, password, delivery) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.userName = userName;
        this.password = password;
        this.delivery = delivery;
    }
    return Customer;
}());
exports.Customer = Customer;
//# sourceMappingURL=customer.model.js.map