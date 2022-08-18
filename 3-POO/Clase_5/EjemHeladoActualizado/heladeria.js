"use strict";
exports.__esModule = true;
var Heladeria = /** @class */ (function () {
    function Heladeria(nombre) {
        this.nombre = nombre;
        this.helados = [];
    }
    Heladeria.prototype.getNombre = function () {
        return this.nombre;
    };
    Heladeria.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    };
    //CRUDF  Create-Read-Update-Delete-Find - ABMLC
    Heladeria.prototype.createHelados = function (helado) {
        if (helado)
            this.helados.push(helado);
    };
    Heladeria.prototype.findHelados = function (helado) {
        for (var i = 0; i < this.helados.length; i++) {
            if (this.helados[i] == helado)
                return i; //true en las buenas practicas
        }
        return -1; //false en las buenas practicas
    };
    Heladeria.prototype.updateHelados = function (helado, posicion) {
        if (helado) //opcion corta cambia instancia
            this.helados[posicion] = helado;
        // if (helado && this.helados[posicion]) { //opcion larga cambia variables de instancia
        //     this.helados[posicion].setSabor(helado.getSabor());
        //     this.helados[posicion].setTipo(helado.getTipo());
        //     this.helados[posicion].setPrecio(helado.getPrecio());
        //     this.helados[posicion].setColor(helado.getColor());
        // }
    };
    Heladeria.prototype.deleteHelados = function (posicion) {
        if (this.helados[posicion])
            this.helados.splice(posicion, 1);
    };
    Heladeria.prototype.readHelados = function () {
        var helados = [];
        this.helados.forEach(function (helado) {
            helados.push(helado);
        });
        return helados;
    };
    Heladeria.prototype.readHeladosTxt = function () {
        var textoHelados = '';
        this.helados.forEach(function (helado) {
            textoHelados += helado.imprimir() + '\n';
        });
        return textoHelados;
    };
    Heladeria.prototype.findHeladosXTipo = function (tipo) {
        var helados = [];
        this.helados.forEach(function (helado) {
            if (helado.getTipo() == tipo)
                helados.push(helado);
        });
        return helados;
    };
    return Heladeria;
}());
exports["default"] = Heladeria;
