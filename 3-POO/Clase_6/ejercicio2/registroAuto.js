"use strict";
exports.__esModule = true;
var registroAutomotor = /** @class */ (function () {
    function registroAutomotor() {
    }
    //CRUD
    registroAutomotor.prototype.createVehiculo = function (auto) {
        if (auto)
            this.vehiculos.push(auto);
    };
    registroAutomotor.prototype.findVehiculo = function (auto) {
        for (var i = 0; i < this.vehiculos.length; i++) {
            if (this.vehiculos[i] == auto)
                console.log("El puesto buscado es correcto", this.vehiculos[i]);
            return true;
        }
        console.log("El puesto buscado es no existe");
        return false;
    };
    registroAutomotor.prototype.updateVehiculo = function (auto, posicion) {
        if (auto)
            this.vehiculos[posicion] = auto;
    };
    registroAutomotor.prototype.deleteVehiculo = function (posicion) {
        if (this.vehiculos[posicion])
            this.vehiculos.splice(posicion);
    };
    registroAutomotor.prototype.readVehiculo = function () {
        var vehiculos = [];
        this.vehiculos.forEach(function (auto) {
            vehiculos.push(auto);
        });
        return vehiculos;
    };
    registroAutomotor.prototype.readVehiculoTxt = function () {
        var textoVehiculo = '';
        this.vehiculos.forEach(function (auto) {
            textoVehiculo += auto.imprimir() + '\n'; //?
        });
        return textoVehiculo;
    };
    registroAutomotor.prototype.findVehiculoXMarca = function (marca) {
        var vehiculos = [];
        this.vehiculos.forEach(function (auto) {
            if (auto.getMarca() == marca)
                vehiculos.push(auto);
        });
        return vehiculos;
    };
    return registroAutomotor;
}());
exports["default"] = registroAutomotor;
