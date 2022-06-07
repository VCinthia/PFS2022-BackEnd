/*• Almacene en un arreglo de dimensión N números (la 
cantidad es ingresada por el usuario)
• Muestre cuántos números son positivos, cuántos son 
negativos y cuántos ceros hay*/

import * as rls from "readline-sync";

let n: number = rls.questionInt("Ingrese la cantidad de elementos: ");
let numPositivos: number =0;
let numNegativos: number =0;
let numCero:number =0;

let arregloUsuario:number [ ] = new Array (n);
let i=0
for(i; i<n; i++){
    
    arregloUsuario [i] = rls.questionInt("Ingrese un valor para la posicion "+i+" :");

    if (arregloUsuario[i]>0){
        numPositivos++;
    }else if (arregloUsuario[i]<0){
        numNegativos++;
    }else{
        numCero++;
    }       
    
}

/*console.log("Listado del arreglo: ", arregloUsuario);*/
console.log(`Listado del arreglo:  [${arregloUsuario}]`);

console.log("La cantidad de numeros positivos es: ", numPositivos);
console.log("La cantidad de numeros negativos es: ", numNegativos);
console.log("La cantidad de numeros cero es: ", numCero);