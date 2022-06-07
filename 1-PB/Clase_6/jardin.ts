/*• El jardín infantil necesita un programa para poder asignar cursos a las aulas
• Se cuentan con tres aulas: Azul, Verde y Amarilla
• Cada aula cuenta con una capacidad diferente (es decir, un número de bancos)
• La aula Azul tiene 40 bancos, la Verde 35 y la Amarilla 30
• Dado un número de infantes ingresado por el usuario, el programa deberá determinar el aula que minimice la cantidad de bancos vacíos
• La salida del algoritmo es el color que identifica al aula asignada
 */

import * as rls from "readline-sync";

let cantInfantes : number = rls.questionInt("Ingrese el numero de infantes: ");

let aAzul:number = 40;
let aVerde: number = 35;
let aAmarilla: number = 30;
/*let aColor: any [] =  new Array (aAmarilla,aAzul,aVerde);*/

function determinarAula(cantInfantes:number){
    
    if (cantInfantes<=aAzul&&cantInfantes>aVerde){
        return aAzul;
    }else if(cantInfantes>aAmarilla){
        return aVerde;
    }else{
        return aAmarilla;
    }
    /*let cantInfantes =0
    for(cantInfantes; cantInfantes<=aColor; cantInfantes++){
        aColor = (cantInfantes <= aColor);
    }*/

}
console.log(`La sala es: ${determinarAula(cantInfantes)}`);// me devuelve numero, no nombre de la variante