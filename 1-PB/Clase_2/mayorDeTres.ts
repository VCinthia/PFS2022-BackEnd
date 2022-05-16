import * as rls from 'readline-sync';

/*
   Desarrolle un algoritmo que dados tres 
números determine cuál es el mayor de los 
tres 
*/


let nroUno : number = rls.questionFloat("Ingrese el primer valor: ");
let nroDos : number = rls.questionFloat("Ingrese el segundo valor: ");
let nroTres : number = rls.questionFloat("Ingrese el tercer valor: ");
let mayorDeTres: number;

if (nroUno > nroDos && nroUno > nroTres){
    mayorDeTres=nroUno;
} else if (nroDos > nroTres){
    mayorDeTres=nroDos;
} else {
    mayorDeTres=nroTres;
}

console.log('El mayor valor es: ', mayorDeTres);