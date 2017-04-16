"use strict";
/**
 * Created by phatnguyen on 3/4/17.
 */
var Delivery = (function () {
    function Delivery(firstName, lastName, company, street, city, zip, state, countryId, phone, email) {
        if (firstName === void 0) { firstName = ""; }
        if (lastName === void 0) { lastName = ""; }
        if (company === void 0) { company = ""; }
        if (street === void 0) { street = ""; }
        if (city === void 0) { city = ""; }
        if (zip === void 0) { zip = ""; }
        if (state === void 0) { state = ""; }
        if (countryId === void 0) { countryId = -1; }
        if (phone === void 0) { phone = ""; }
        if (email === void 0) { email = ""; }
        this.firstName = firstName;
        this.lastName = lastName;
        this.company = company;
        this.street = street;
        this.city = city;
        this.zip = zip;
        this.state = state;
        this.countryId = countryId;
        this.phone = phone;
        this.email = email;
    }
    return Delivery;
}());
exports.Delivery = Delivery;
//# sourceMappingURL=delivery.js.map