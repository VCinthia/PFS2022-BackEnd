/*• Se necesita vender los pasajes de un colectivo. El 
colectivo tiene 20 filas de 3 butacas cada uno
• Por convención se pone un 0 en el asiento libre y un 
1 en el ya vendido. Cuando los pasajes se ponen a 
la venta están todos los asientos libres 
• Cuando una persona quiere comprar se muestra los 
lugares desocupados y se le asigna un asiento 
elegido por el pasajero*/

import * as rls from 'readline-sync';

let filas : number = 20;
let columnas : number = 3;

let asientos : number[][] = crearMatriz(filas, columnas);
function crearMatriz(filas : number, columnas: number){
    let matriz : any [][] = new Array (columnas);
    for (let i = 0; i < matriz.length; i++) {
        matriz [i] = new Array (filas);        
    }
    return matriz;
}

function rellenarMatriz (matriz : number [][]){
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[0].length; j++) {
            matriz [i] [j]= 0;            
        }        
    }
}
rellenarMatriz (asientos);

let comprarAsientoX : number = rls.questionInt("selecione columna de asiento(entre 1 y 3): ");
while (comprarAsientoX > 3 ||comprarAsientoX< 1){
    console.log ("numero no valido, ingrese uno valido");
    comprarAsientoX = rls.questionInt("selecione columna de asiento(entre 1 y 3): ")
}

let comprarAsientoY : number = rls.questionInt("selecione fila de asiento(entre 1 y 20): ");
while (comprarAsientoY > 20 ||comprarAsientoY< 1){
    console.log ("numero no valido, ingrese uno valido");
    comprarAsientoY = rls.questionInt("selecione fila de asiento(entre 1 y 20): ")
}
asientos [comprarAsientoX - 1] [comprarAsientoY - 1] = 1;

function listarMatriz (matriz : number [][]){
    for (let i = 0; i < matriz.length; i++) {
      console.log("columna" + (i + 1) +": " + matriz[i])
        
    }    
} 
listarMatriz (asientos); 