/*
• Realice un programa que devuelva la potencia de un número.
• La base y el exponente deben ser ingresados por teclado.
• Sólo deben admitirse exponentes mayores o iguales a cero.
• Recuerde que el resultado de un numero elevado a 0 es 1.
• Separe la lógica de calcular la potencia utilizando métodos.
*/


/*
import * as rls from "readline-sync";

let base: number = rls.questionInt("Ingrese el numero de base: ");
let exponente: number = rls.questionInt("Ingrese el numero del exponente: ");
while (exponente<0){
    console.log("El exponente ingresado no es valido. Ingrese un exponente mayor o igual a cero.");
    exponente = rls.questionInt("Ingrese el numero del exponente: ");
}

function potencia (base: number, exponente: number): number{
    
    return(base**exponente)
}

console.log("La potencia para el numero "+base+" con exponente "+exponente+" es: "+potencia(base,exponente));*/

/*---------------------------------------------------------------*/

import * as rls from "readline-sync";

let base: number = rls.questionInt("Ingrese el numero de base: ");
let exponente: number = rls.questionInt("Ingrese el numero del exponente: ");
while (exponente<0){
    console.log("El exponente ingresado no es valido. Ingrese un exponente mayor o igual a cero.");
    exponente = rls.questionInt("Ingrese el numero del exponente: ");
}


let i: number;
for (i=1; i<=exponente; i++){
    console.log("La potencia para el numero "+base+" con exponente "+i+" es: "+potencia(base,i));
}

function potencia (base: number, exponente: number): number{
    return (base**exponente);
}