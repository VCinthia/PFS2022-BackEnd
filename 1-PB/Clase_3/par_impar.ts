/*
• Realizar un algoritmo que dado un número entero ingresado por el
usuario, visualice en pantalla si es par o impar.
• En el caso de ingresar un cero, se debe volver a pedir el número por
teclado (hasta que se ingrese un número mayor que cero).
*/
import * as rls from "readline-sync";

let numEntero:number = rls.questionInt("Ingrese un numero entero: ");

while(numEntero==0){
    numEntero= rls.questionInt("Ingrese un nunmero distinto de cero:")}
    if(numEntero%2==0){
        console.log("El numero ingresado es PAR.");
        
    }else{
        console.log("El numero ingresado es IMPAR")
    }

