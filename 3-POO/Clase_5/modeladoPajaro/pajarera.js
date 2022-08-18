"use strict";
exports.__esModule = true;
var Pajarera = /** @class */ (function () {
    function Pajarera(nombre) {
        this.nombre = nombre;
        this.pajaros = [];
    }
    Pajarera.prototype.getNombre = function () { return this.nombre; };
    Pajarera.prototype.setNombre = function (nombre) { this.nombre = nombre; };
    //CRUD
    Pajarera.prototype.createPajaros = function (pajaro) {
        if (pajaro)
            this.pajaros.push(pajaro);
    };
    Pajarera.prototype.findPajaros = function (pajaro) {
        for (var i = 0; i < this.pajaros.length; i++) {
            if (this.pajaros[i] == pajaro)
                console.log("El puesto buscado es correcto", this.pajaros[i]);
            return true;
        }
        console.log("El puesto buscado es no existe");
        return false;
    };
    Pajarera.prototype.updatePajaros = function (pajaro, posicion) {
        if (pajaro)
            this.pajaros[posicion] = pajaro;
    };
    Pajarera.prototype.deletePajaros = function (posicion) {
        if (this.pajaros[posicion])
            this.pajaros.splice(posicion);
    };
    Pajarera.prototype.readPajaros = function () {
        var pajaros = [];
        this.pajaros.forEach(function (pajaro) {
            pajaros.push(pajaro);
        });
        return pajaros;
    };
    Pajarera.prototype.readPajarosTxt = function () {
        var textoPajaros = '';
        this.pajaros.forEach(function (pajaro) {
            textoPajaros += pajaro.imprimir() + '\n'; //?
        });
        return textoPajaros;
    };
    Pajarera.prototype.findPajarosXEspecie = function (especiePajaro) {
        var pajaros = [];
        this.pajaros.forEach(function (pajaro) {
            if (pajaro.getNombreEspecie() == especiePajaro)
                pajaros.push(pajaro);
        });
        return pajaros;
    };
    return Pajarera;
}());
exports["default"] = Pajarera;
