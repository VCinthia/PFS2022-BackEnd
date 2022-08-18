"use strict";
exports.__esModule = true;
var Pajareria = /** @class */ (function () {
    function Pajareria(nombre) {
        this.nombre = nombre;
        this.pajaros = [];
    }
    Pajareria.prototype.getNombre = function () { return this.nombre; };
    Pajareria.prototype.setNombre = function (nombre) { this.nombre = nombre; };
    //CRUD
    Pajareria.prototype.createPajaros = function (pajaro) {
        if (pajaro)
            this.pajaros.push(pajaro);
    };
    Pajareria.prototype.findPajaros = function (pajaro) {
        for (var i = 0; i < this.pajaros.length; i++) {
            if (this.pajaros[i] == pajaro)
                console.log("El puesto buscado es correcto", this.pajaros[i]);
            return true;
        }
        console.log("El puesto buscado es no existe");
        return false;
    };
    Pajareria.prototype.updatePajaros = function (pajaro, posicion) {
        if (pajaro)
            this.pajaros[posicion] = pajaro;
    };
    Pajareria.prototype.deletePajaros = function (posicion) {
        if (this.pajaros[posicion])
            this.pajaros.splice(posicion);
    };
    Pajareria.prototype.readPajaros = function () {
        var pajaros = [];
        this.pajaros.forEach(function (pajaro) {
            pajaros.push(pajaro);
        });
        return pajaros;
    };
    Pajareria.prototype.readPajarosTxt = function () {
        var textoPajaros = '';
        this.pajaros.forEach(function (pajaro) {
            textoPajaros += pajaro.imprimir() + '\n'; //?
        });
        return textoPajaros;
    };
    Pajareria.prototype.findPajarosXEspecie = function (especiePajaro) {
        var pajaros = [];
        this.pajaros.forEach(function (pajaro) {
            if (pajaro.getNombreEspecie() == especiePajaro)
                pajaros.push(pajaro);
        });
        return pajaros;
    };
    return Pajareria;
}());
exports["default"] = Pajareria;
