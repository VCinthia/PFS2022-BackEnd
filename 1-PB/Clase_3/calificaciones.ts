/*Calcular las calificaciones de un grupo de alumnos, donde la nota
final de cada alumno se calcula según el siguiente criterio:
• la parte práctica vale el 10%
• la parte de ejercicios vale el 50%
• la parte teórica el 40%
Se debe ingresar el nombre del alumno y sus tres notas (práctica,
ejercicios y teórica), se escribirá el resultado y se volverá a pedir
los datos del siguiente alumno hasta que el nombre sea una
cadena vacía
Las notas deben estar entre 0 y 10 (si no lo están, no imprimirá las
notas, mostrará un mensaje de error y continuará con otro alumno)*/


import * as rls from "readline-sync";

let nombreAlumno: string; /*cantNotas: number, sumaNotas: number, promediofinal: number, */
let notaPractica: number;
let notaEjercicio:number;
let notaTeorica:number;


nombreAlumno = rls.question ("Ingrese el nombre del alumno/a: ");
while (nombreAlumno != ""){ 
    notaPractica = rls.questionInt("Inserte nota del 0 al 10 para practica: ");
    notaEjercicio = rls.questionInt("Inserte nota del 0 al 10 para ejercicio: ");
    notaTeorica = rls.questionInt("Inserte nota del 0 al 10 para teorica: ");

    if ((notaPractica <=10 && notaEjercicio<=10 && notaTeorica<=10) && (notaPractica>=0 && notaEjercicio>=0 && notaTeorica>=0)){
        let notaFinal: number = notaPractica * 0.1 + notaEjercicio * 0.5 + notaTeorica * 0.4;
        console.log("La nota final para ", nombreAlumno , " es :" , notaFinal);
    } else {
        console.log("Una o mas notas no fueron correctamente ingresadas");        
    }
    nombreAlumno = rls.question ("Ingrese el nombre del alumno/a: ");
}