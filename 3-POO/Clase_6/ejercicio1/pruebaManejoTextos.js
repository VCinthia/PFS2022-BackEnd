"use strict";
exports.__esModule = true;
var ManejoTextos_1 = require("./ManejoTextos");
var Padre_1 = require("./Padre");
var Hijo_1 = require("./Hijo");
var info = [];
var fila = [];
var cantidadFilas = 0;
var MTP = new ManejoTextos_1["default"]('datosPadre.txt', ';', ',');
var MTH = new ManejoTextos_1["default"]('datosHijo.txt', '\r\n', '|');
MTP.leerArchivo();
MTH.leerArchivo();
MTP.getCantidadFilas();
cantidadFilas = MTP.getCantidadFilas();
for (var i = 0; i < cantidadFilas; i++) {
    fila = MTP.getFila(i);
    info.push(new Padre_1["default"]((fila[0] == 'true' ? true : false), parseInt(fila[1]), parseInt(fila[2])));
}
console.log(info);
// info = [];
cantidadFilas = MTH.getCantidadFilas();
for (var i = 0; i < cantidadFilas; i++) {
    fila = MTH.getFila(i);
    info.push(new Hijo_1["default"]((fila[0] == 'true' ? true : false), parseInt(fila[1]), parseInt(fila[2]), fila[3], parseInt(fila[4])));
}
console.log(info);
