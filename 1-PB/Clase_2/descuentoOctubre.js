"use strict";
exports.__esModule = true;
/*
    Una tienda al cumplir años en Octubre ofrece
    un descuento del 15% a sus clientes en todas
    sus compras
    •Desarrolle un algoritmo que dada una compra:
    precio unitario, cantidad y el mes, indicados
    por el usuario, determine si el cliente tiene
    descuento o no
    Recuerde plantear las Pruebas de Escritorio
*/
var rls = require("readline-sync");
var precioUnitario = rls.questionInt("Ingrese el precio: ");
var cantidad = rls.questionInt("Ingrese la cantidad: ");
var mes = rls.question("Ingrese el mes: ");
var precioCompra = (precioUnitario * cantidad);
if (precioCompra) {
    if (mes == "octubre") {
        console.log("El precio de compra es ".concat(precioCompra * 0.85));
    }
    else {
        console.log("El precio de compra es " + precioCompra);
    }
}
