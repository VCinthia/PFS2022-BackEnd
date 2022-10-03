"use strict";
exports.__esModule = true;
exports.VehiculosService = void 0;
var VehiculosService = /** @class */ (function () {
    function VehiculosService(tipo, marca, patente, modelo, año, precio) {
        this.vehiculos = [];
        this.autos = [];
        this.camionetas = [];
        this.tipo = tipo;
        this.marca = marca;
        this.patente = patente;
        this.modelo = modelo;
        this.año = año;
        this.precio = precio;
    }
    ;
    VehiculosService.prototype.createVehiculo = function (tipo, marca, patente, modelo, año, precio) {
        this.tipo = tipo;
        this.marca = marca;
        this.patente = patente;
        this.modelo = modelo;
        this.año = año;
        this.precio = precio;
    };
    ;
    VehiculosService.prototype.saveVehiculo = function (vehiculo) {
        if (vehiculo) {
            this.vehiculos.push(vehiculo);
            {
                if (vehiculo.tipo == 'auto') {
                    this.autos.push(vehiculo);
                    console.log("Cargado en Autos el vehiculo ".concat(vehiculo.patente));
                }
                else {
                    if (vehiculo.tipo == 'camioneta') {
                        this.camionetas.push(vehiculo);
                        console.log("Cargado en Camionetas el vehiculo ".concat(vehiculo.patente));
                    }
                }
            }
        }
    };
    VehiculosService.prototype.getAutos = function () {
        return this.autos;
        //console.log(this.autos);        
    };
    VehiculosService.prototype.getCamionetas = function () {
        //return this.camionetas;
        console.log(this.camionetas);
    };
    return VehiculosService;
}());
exports.VehiculosService = VehiculosService;
var vehiculo1 = new VehiculosService('auto', 'Ford', 25145, 'Fiesta', 2017, 2000000);
vehiculo1.saveVehiculo(vehiculo1); //ok
console.log(vehiculo1.getAutos());
vehiculo1.getCamionetas();
