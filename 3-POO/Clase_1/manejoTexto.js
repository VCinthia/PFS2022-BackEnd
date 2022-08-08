"use strict";
exports.__esModule = true;
var fs = require("fs");
//leemos el archivo de texto como una unica cadena de texto
var texto = fs.readFileSync('abc.txt', 'utf-8');
//separamos la palabras en un arreglo usando el espacio como delimitador
var palabras = texto.split(' ');
//listamos las palabras
console.log("Antes: ".concat(palabras));
//alteramos las palabras y concatenamos el arreglo en una unica cadena separada por espacios
texto = '';
palabras.forEach(function (palabra) {
    palabra = palabra.toUpperCase();
    texto += palabra + ' ';
});
//guardamos la cadena en el archivo de texto
fs.writeFileSync('abc.txt', texto);
//re-leemos el archivo de texto como una unica cadena de texto
texto = fs.readFileSync('abc.txt', 'utf-8');
//separamos las palabras en un arreglo usando el espacio como delimitador
palabras = texto.split(' ');
//listamos las palabras
console.log(("Despues: ".concat(palabras)));
