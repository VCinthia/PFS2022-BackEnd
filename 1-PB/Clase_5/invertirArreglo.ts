/*• Almacene en un arreglo de tamaño N los números ingresados 
por el usuario
• La dimensión N también es ingresada por el usuario
• Muestre los números del arreglo pero del último al primero*/

import * as rls from "readline-sync";

let n: number = rls.questionInt("Ingrese la cantidad de elementos: ")

let arregloUsuario:number [ ] = new Array (n);
let i=0;

for(i; i<n; i++){
    
    arregloUsuario [i] = rls.questionInt("Ingrese un valor para la posicion "+i+" :");  
}

    console.log("La lista de elementos es: ",arregloUsuario);

let arregloInvertido:string=" "
for(i=n-1; i>=0; i--){    
   arregloInvertido=arregloInvertido+arregloUsuario[i]+" ";
}
    console.log("La lista invertida es: ["+arregloInvertido+ "]");
