"use strict";
exports.__esModule = true;
var Helado = /** @class */ (function () {
    function Helado(sabor, tipo, precio, color) {
        this.sabor = sabor;
        this.tipo = tipo;
        this.precio = precio;
        this.color = color;
    }
    Helado.prototype.getSabor = function () {
        return this.sabor;
    };
    Helado.prototype.setSabor = function (sabor) {
        this.sabor = sabor;
    };
    Helado.prototype.getTipo = function () {
        return this.tipo;
    };
    Helado.prototype.setTipo = function (tipo) {
        this.tipo = tipo;
    };
    Helado.prototype.getPrecio = function () {
        return this.precio;
    };
    Helado.prototype.setPrecio = function (precio) {
        this.precio = precio;
    };
    Helado.prototype.getColor = function () {
        return this.color;
    };
    Helado.prototype.setColor = function (color) {
        this.color = color;
    };
    Helado.prototype.imprimir = function () {
        return "Helado { sabor:".concat(this.getSabor(), ", tipo:").concat(this.getTipo(), ", precio:").concat(this.getPrecio(), ", color:").concat(this.getColor(), "  }");
    };
    return Helado;
}());
exports["default"] = Helado;
