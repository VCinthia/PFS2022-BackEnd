"use strict";
/*
* DESARROLLE ALGORITMO QUE DIGA EL PRECIO DE UNA COMPRA
* LA COMPRA SE COMPONE DEL PRECIO DE PRODUCTO Y CANTIDAD
* SI EL CLIENTE GASTA MAS DE $1000.- DEBEMOS APLICARLE UN DESCUENTO DEL 10%
*/
exports.__esModule = true;
var rls = require("readline-sync");
var precio = rls.questionFloat('Ingrese el precio del producto: ');
var cantidad = rls.questionInt('Ingrese la cantidad de productos: ');
var precioCompra = (precio * cantidad);
if (precioCompra < 1000) {
    console.log('El valor de la compra es ' + precioCompra);
}
else {
    console.log('El valor de la compra es ' + (precioCompra * 0.9));
}
