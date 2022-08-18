"use strict";
exports.__esModule = true;
var heladeria_1 = require("./heladeria");
var helado_1 = require("./helado");
var chocolate = new helado_1["default"]('chocolate', 'crema', 100, 'marron');
var dulceDeLeche = new helado_1["default"]('dulce de leche', 'crema', 90, 'marron claro');
var limon = new helado_1["default"]('limon', 'agua', 50, 'blanco');
var miHeladeria = new heladeria_1["default"]('Heladeria de Mauricio');
miHeladeria.createHelados(chocolate);
miHeladeria.createHelados(dulceDeLeche);
miHeladeria.createHelados(limon);
console.log(miHeladeria.readHeladosTxt());
console.log(miHeladeria.findHeladosXTipo('crema'));
console.log(miHeladeria.findHeladosXTipo('agua'));
console.log(miHeladeria.findHeladosXTipo('leche vegetal'));
// miHeladeria.updateHelados(limon, 1);
// console.log(miHeladeria.readHeladosTxt());
// miHeladeria.deleteHelados(1);
// console.log(miHeladeria.readHeladosTxt());
if (miHeladeria.findHelados(chocolate) != -1) {
    console.log('Chocolate esta.');
}
else {
    console.log('Chocolate no esta.');
}
// let posicionLimon: number = miHeladeria.findHelados(dulceDeLeche);
// if (posicionLimon != -1) {
//     miHeladeria.updateHelados(limon, posicionLimon);
// } else {
//     miHeladeria.createHelados(limon);
// }
// console.log(miHeladeria.readHeladosTxt());
