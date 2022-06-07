/*
•Hacer la suma de dos arreglos y dejarlo en 
otro arreglo.
•La dimensión de los arreglos es solicitada al 
usuario.
•Los dos arreglos son cargados al azar.
*/

import *  as rls from "readline-sync";


let cant: number = rls.questionInt("Ingrese la dimension del arreglo: ")
let v1: number [ ] = new Array (cant); 
let v2: number [ ] = new Array (cant); 
let vSuma: number [ ] = new Array ();

function cargarArreglos (v: number []){
    for(let i=0; i<v.length; i++){
      v[i]= aleatorio (0, 100);
    }
}
function aleatorio(minimo: number, maximo: number): number{
    return Math.floor((Math.random()*(maximo-minimo)) + minimo);
}
 
function sumarArreglos (v1: number [],v2: number [], vSuma: number []){
    for (let i = 0; i < v1.length; i++){/*uso v1, pero podria usar cualquiera porque todos miden lo mismo*/
        vSuma [i] = v1 [i] + v2 [i];
    }
}

cargarArreglos(v1);
cargarArreglos(v2);
sumarArreglos(v1,v2,vSuma);
console.log(`Los arreglos son ${v1} y ${v2} . Su suma es igual a: ${vSuma}`);


