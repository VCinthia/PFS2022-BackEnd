"use strict";
exports.__esModule = true;
var color_1 = require("./color");
var Auto = /** @class */ (function () {
    function Auto(patente, titular, marca, modelo, año, color) {
        this.patente = patente;
        this.titular = titular;
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
        this.color = color;
    }
    Auto.prototype.getPatente = function () { return this.patente; };
    Auto.prototype.setPatente = function (patente) { this.patente = patente; };
    Auto.prototype.getTitular = function () { return this.titular; };
    Auto.prototype.setTitular = function (titular) { this.titular = titular; };
    Auto.prototype.getMarca = function () { return this.marca; };
    Auto.prototype.setMarca = function (marca) { this.marca = marca; };
    Auto.prototype.getModelo = function () { return this.modelo; };
    Auto.prototype.setModelo = function (modelo) { this.modelo = modelo; };
    Auto.prototype.getAño = function () { return this.año; };
    Auto.prototype.setAño = function (año) { this.año = año; };
    Auto.prototype.getColor = function () { return this.color; };
    Auto.prototype.setColor = function (Color) { this.color = Color; };
    Auto.prototype.imprimir = function () {
        console.log("El auto instanciado posee la sig. descripci\u00F3n: {\n            ".concat(this.patente, ", ").concat(this.titular, ", ").concat(this.marca, ", ").concat(this.modelo, ", ").concat(this.año, ", ").concat((this.color)));
    };
    return Auto;
}());
exports["default"] = Auto;
var colorPrueba = new color_1["default"](25, 36, 42);
var autoPrueba = new Auto('AAA111', 'NombreRandom', 'Ford', 'Fiesta', 2014, colorPrueba);
autoPrueba.imprimir();
