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


import * as rls from 'readline-sync';

let precioUnitario: number = rls.questionInt("Ingrese el precio: ");
let cantidad: number = rls.questionInt("Ingrese la cantidad: ");
let mes: string = rls.question("Ingrese el mes: ");

let precioCompra: number = (precioUnitario*cantidad)

if (precioCompra){
    if (mes=="octubre"){
        console.log(`El precio de compra es ${precioCompra * 0.85}`);    
    } else {
        console.log("El precio de compra es "+ precioCompra);
    }
}
