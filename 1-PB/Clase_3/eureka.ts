/*
• Escribir un algoritmo que nos pida una clave y verifique que sea la
correcta
• Tenga en cuenta que la clave es la palabra “eureka”
• Solo tenemos 3 intentos para acertar, si fallamos los 3 intentos
el sistema mostrará un mensaje indicándonos que hemos agotado
todas las oportunidades
• Si acertamos la clave, saldremos directamente del programa
*/
import * as rls from "readline-sync";

let clave: string, contador: number;

for(contador=1; contador<=3; contador++){
    while(clave !== "eureka"){
        clave = rls.question("Ingrese la opcion "+contador+": ");{
    if (clave == "eureka"){
        console.log("La clave es correcta.");
        
    }else{
        console.log("Error de clave.")
    }}
}
}