
/*
•Construya un algoritmo que sume todos los 
elementos de un arreglo de tamaño N
•La dimensión del arreglo es ingresada por el 
usuario
•Los elementos (números) del arreglo son 
ingresados por el usuario
*/

import * as rls from "readline-sync";

let n: number = rls.questionInt("Ingrese la cantidad de elementos: ")


let arregloUsuario:number [ ] = new Array (n);
let i=0
for(i; i<n; i++){
    
    arregloUsuario [i] = rls.questionInt("Ingrese un valor para la posicion "+i+" :");
    
}
 
let sum=0
for (i=0; i < n; i++) {
        sum += arregloUsuario[i];
                  
} 
console.log(sum); 

    






