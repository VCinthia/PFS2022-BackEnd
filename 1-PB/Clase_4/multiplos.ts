/*Cree un método esMultiplo con 2 parámetros que devuelva el 
valor lógico verdadero o falso según si el primer número que 
se indique como parámetro es múltiplo del segundo 
• Recuerde que un numero es múltiplo de otro si al dividirlo su 
resto es cero
• Recuerde que la operación mod permite saber si el resto de 
una división es cero*/

import * as rls from "readline-sync";

let dividendo: number = rls.questionInt("Ingrese el dividendo: ");
let divisor: number = rls.questionInt("Ingrese el divisor: ")


function esMultiplo(dividendo: number, divisor: number):boolean{
    return (dividendo%divisor)==0;
}

console.log("Para los numeros ingresados 'esMultiplo' es : " + esMultiplo(dividendo,divisor));
