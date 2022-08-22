"use strict";
exports.__esModule = true;
var Color = /** @class */ (function () {
    function Color(red, green, blue) {
        this.red = red;
        this.green = green;
        this.blue = blue;
    }
    Color.prototype.getRed = function () { return this.red; };
    Color.prototype.setRed = function (red) { this.red = red; };
    Color.prototype.getGreen = function () { return this.green; };
    Color.prototype.setGreen = function (green) { this.green = green; };
    Color.prototype.getBlue = function () { return this.blue; };
    Color.prototype.setBlue = function (blue) { this.blue = blue; };
    return Color;
}());
exports["default"] = Color;
