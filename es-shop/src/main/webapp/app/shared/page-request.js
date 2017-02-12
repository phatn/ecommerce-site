"use strict";
var app_settings_1 = require("./app-settings");
/**
 * Created by phatnguyen on 1/30/17.
 */
var PageRequest = (function () {
    function PageRequest(page, size) {
        if (page === void 0) { page = 1; }
        if (size === void 0) { size = app_settings_1.AppSettings.PAGE_SIZE; }
        this.page = page;
        this.size = size;
    }
    PageRequest.prototype.reset = function () {
        this.page = 1;
        this.size = app_settings_1.AppSettings.PAGE_SIZE;
    };
    return PageRequest;
}());
exports.PageRequest = PageRequest;
//# sourceMappingURL=page-request.js.map