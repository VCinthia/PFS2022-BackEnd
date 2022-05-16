/*
* DESARROLLE ALGORITMO QUE DIGA EL PRECIO DE UNA COMPRA
* LA COMPRA SE COMPONE DEL PRECIO DE PRODUCTO Y CANTIDAD
* SI EL CLIENTE GASTA MAS DE $1000.- DEBEMOS APLICARLE UN DESCUENTO DEL 10%
*/

import * as rls from 'readline-sync';

let precio: number = rls.questionInt("Ingrese el precio del producto: ");
let cantidad: number = rls.questionInt ("Ingrese la cantidad de productos: ");

let precioCompra : number = (precio*cantidad);

if (precioCompra<1000){
    console.log('El valor de la compra es '+ precioCompra);
    }else{
        console.log('El valor de la compra es ' + (precioCompra*0.9));        
    }

