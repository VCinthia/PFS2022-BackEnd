"use strict";
exports.__esModule = true;
var rls = require("readline-sync");
/*
   Desarrolle un algoritmo que dados tres
números determine cuál es el mayor de los
tres
*/
var nroUno = rls.questionFloat("Ingrese el primer valor: ");
var nroDos = rls.questionFloat("Ingrese el segundo valor: ");
var nroTres = rls.questionFloat("Ingrese el tercer valor: ");
var mayorDeTres;
if (nroUno > nroDos && nroUno > nroTres) {
    mayorDeTres = nroUno;
}
else if (nroDos > nroTres) {
    mayorDeTres = nroDos;
}
else {
    mayorDeTres = nroTres;
}
console.log('El mayor valor es: ', mayorDeTres);
