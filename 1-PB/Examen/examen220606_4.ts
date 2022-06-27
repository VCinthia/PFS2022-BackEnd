//No funciona y sin buenas practicas
// //Algoritmo secreto
// let elem, arr, nro, ocu;
// elem = readlineSync.questionInt("Ingrese tamaño: ");
// arr = new Array(elem);
// cargar(arr);
// nro: number = readlineSync.questionInt("Ingrese numero: ");
// ocu = funcion(arr,nro);
// console.log(`El numero ${nro} ... ${ocu}`);
// mostrar(arr, elem)
// function cargar(v) {
//     for (let i = 0; i < v.length; i++)
//             v[i]=Math.floor(Math.random()*100);
// }
// function mostrar(v,n) {
//     let c="";
//     for (let i = 0; i < v.length; i++)
//             c+= v[i] + " ";
//     console.log(c);
// }
// function funcion(v,n) {
//     let o=0;
//     for (let i = 0; i < v.length; i++)
//             if (v[i] == n)
//                     o+=1;
// }
//Funciona y con buenas practicas
//Algoritmo que crea un arreglo de numeros de dimension indicada por el usuario, 
//lo inicializa con valores aleatorios entre 0 y 99 y luego pide al usuario 
//un numero del cual cuenta las ocurrencias que encuentra en el arreglo
import * as readlineSync from "readline-sync";

let dimension: number = 0;
let arreglo: number[];
let numero: number = 0;
let ocurrencias: number = 0;
//Pedimos una dimension al usuario
dimension = readlineSync.questionInt("Ingrese dimension: ");
//Cremos el arreglo
arreglo = new Array(dimension);
//Inicializamos el arreglo con valores al azar entre 0 y 99
inicializarAlAzar(arreglo, 100);
//Solicitamos el numero a buscar
numero = readlineSync.questionInt("Ingrese numero a buscar: ");
//Contamos ocurrencias del numero
ocurrencias = contarOcurrencias(arreglo, numero);
//Informamos el resultado de la busqueda
console.log(`El numero ${numero} aparece ${ocurrencias} veces en ${mostrarArreglo(arreglo, numero)}`);

//Funcion que rellena un arreglo con valores al azar entre 0 y el entero anterior al tope indicado.
function inicializarAlAzar(vector: number[], tope: number) {
    for (let i: number = 0; i < vector.length; i++) {
        vector[i]=Math.floor(Math.random()*100);
    }
}
//Funcion que retorna una cadena con los elementos del arreglo en una linea separandolos con un espacio
function mostrarArreglo(vector: number[], numero: number): string {
    let salida: string ="";
    for (let i: number = 0; i < vector.length; i++) {
        salida += vector[i] + " ";
    }
    return salida;
}
//Funcion que retorna la cantidad de veces que encuentra el numero en un arreglo
function contarOcurrencias(vector: number[], numero: number): number {
    let ocurrencias: number = 0;
    for (let i = 0; i < vector.length; i++) {
        if (vector[i] == numero) {
            ocurrencias+=1;
        }
    }
    return ocurrencias;
}