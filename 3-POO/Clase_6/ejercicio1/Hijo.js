"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Padre_1 = require("./Padre");
var Hijo = /** @class */ (function (_super) {
    __extends(Hijo, _super);
    //funcionalidad
    function Hijo(a, b, c, d, e) {
        var _this = _super.call(this, a, b, c) || this;
        _this.d = d;
        _this.e = e;
        return _this;
    }
    return Hijo;
}(Padre_1["default"]));
exports["default"] = Hijo;
