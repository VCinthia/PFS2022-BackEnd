"use strict";
/*
• Solicitar mensaje por pantalla y codificar mensaje
• Definir las tareas asociadas y ejecutarlas */
exports.__esModule = true;
var rls = require("readline-sync");
var mensaje = rls.question("Ingrese el mensaje a codificar: ");
function encriptar(mensaje) {
    var matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    mensaje = mensaje.toLowerCase();
    for (var i = 0; i < matrizCodigo.length; i++) {
        if (mensaje.includes(matrizCodigo[i][0])) {
            mensaje = mensaje.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return mensaje;
}
console.log("El mensaje encriptado es: ".concat(encriptar(mensaje)));
