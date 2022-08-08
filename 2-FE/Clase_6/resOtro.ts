import * as rls from 'readline-sync';

let frase : string = rls.question("Ingrese una frase: ");
let cuentaLetras : number[] = new Array(26);//arreglo de conteo
let letras : string = "abcdefghijklmnopqrstuvwxyz";

function contarLetras (texto : string, cantidades : number[], letras : string) {  //contar cuantas veces esta cada letra
    let index1 : number = 0;
    let index2 : number = 0;
    texto=texto.trim();
    texto=texto.toLowerCase();
    for  (index1=0; index1 < cantidades.length ; index1++) {     //inicializo cada posicion del arreglo
        cantidades[index1]= 0;   
    }
    for (index1=0; index1 < letras.length ; index1++) {     //recorre el abecedario
        for (index2 = 0 ; index2 < texto.length ; index2++) {   //recorre la frase
                if (letras[index1] == texto[index2]) {              //si la que toca de abecedario es igual a la que toca del texto
                cantidades[index1] ++ ;                         //aumento el numero del arreglo en uno
            } 
        }
    }
}

function listarCuenta(cantidades : number[], letras: string): string{   //mostrar cuantas veces esta cada letra
    let cuantasVecesCadaLetra : string = "";
    let indexLetras : number;
/*    let aux : string = "";*/
    for (indexLetras=0; indexLetras < letras.length ; indexLetras++) {            //recorre las letras y recorre el arreglo que dice cuantas veces esta cada letra
        if (cantidades[indexLetras]>0) {
        cuantasVecesCadaLetra= cuantasVecesCadaLetra + (cantidades[indexLetras].toString()) + letras[indexLetras]+" ";     //la agrega a esta variable string
        } 
    }
    return cuantasVecesCadaLetra;
}

contarLetras (frase,cuentaLetras, letras);
console.log(`La frase: ${frase} tiene ${listarCuenta(cuentaLetras,letras)}`);