"use strict";
/**
 * Created by phatnguyen on 2/3/17.
 */
var Breadcrumb = (function () {
    function Breadcrumb(url, name, active) {
        if (active === void 0) { active = false; }
        this.url = url;
        this.name = name;
        this.active = active;
    }
    return Breadcrumb;
}());
exports.Breadcrumb = Breadcrumb;
//# sourceMappingURL=breadcrumb.model.js.map