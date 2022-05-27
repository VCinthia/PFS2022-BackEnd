import * as rls from "readline-sync";



let num: number [] = new Array (5);
let i=0
for (i; i<=4; i++) {
    num [i]=rls.questionInt("Ingrese un numero para el indice " +i+ " ");
}

console.log("Los elementos son: ", num);