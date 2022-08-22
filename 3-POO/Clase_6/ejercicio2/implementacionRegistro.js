"use strict";
exports.__esModule = true;
var ManejoTextos_1 = require("../soluciones1/ManejoTextos");
var registroAuto_1 = require("./registroAuto");
var info = [];
var fila = [];
var cantidadFilas = 0;
var MTRA = new ManejoTextos_1["default"]('datosAuto.txt', ';', ',');
MTRA.leerArchivo();
MTRA.getCantidadFilas();
cantidadFilas = MTRA.getCantidadFilas();
for (var i = 0; i < cantidadFilas; i++) {
    fila = MTRA.getFila(i);
    info.push(new registroAuto_1["default"]( /* (fila[0]=='true'?true:false),parseInt(fila[1]),parseInt(fila[2]) */));
}
console.log(info);
// info = [];
