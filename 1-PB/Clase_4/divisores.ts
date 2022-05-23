/*• Implemente un método llamado cantidadDeDivisores que 
reciba un número entero y devuelva la cantidad de sus 
divisores
• Por ejemplo, para el número 16, sus divisores son 1, 2, 4, 8, 
16, por lo que la respuesta debería ser 5 
• Re-utilice el método esMultiplo implementado para el ejercicio 
anterior*/

import * as rls from "readline-sync";

let dividendo: number = rls.questionInt("Ingrese el dividendo: ");

function esMultiplo(dividendo: number, divisor: number):boolean{    
    return (dividendo%divisor)==0;
}

function cantidadDeDivisores(dividendo: number):number{
    let cont: number =0
    let i: number;
    for (i=1; i<=dividendo; i++)
    if (esMultiplo(dividendo,i)){
        cont ++
    } 
    return cont  
}
console.log("Para el numero "+ dividendo + " la cantidad de divisores son: " + cantidadDeDivisores(dividendo));
