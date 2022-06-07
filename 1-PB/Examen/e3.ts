//Algoritmo secreto

/*
El algoritmo define en una linea varios tipos de datos y pide ingresar elementos de los mismos por medio de rls(tamaño para el array elem, nro). por medio de ocu "iguala" una funcion que contiene entre sus parametro( arr y nro) y los muestra por consola.
Crea una funcion "cargar()" con paramentro "v y n" y la implementa, esta funcion recorre un elemento y redondea una serie de numeros aleatorios. 
Crea una funcion "mostrar" con parametro "v" y "n" que recorre un elemento y suma a una variante "c" del tipo string, inicializada con un vacio, los elementos de v en la posicion [i],
Crea una funcion llamada "funcion" cargar con parametro v y n, y la implementa; esta funcion recorre un elemento y si v en la posicion [I] es igual a "n", suma una unidad a una variante "o". 
*/

/*let elem, arr, nro, ocu;
elem = readlineSync.questionInt("Ingrese tamaño: ");
arr = new Array(elem);
cargar(arr);
nro: number = readlineSync.questionInt("Ingrese numero: ");
ocu = funcion(arr,nro);
console.log(`El numero ${nro} ... ${ocu}`);
mostrar(arr, elem)
function cargar(v) {
    for (let i = 0; i < v.length; i++)
            v[i]=Math.floor(Math.random()*100);
}
function mostrar(v,n) {
    let c="";
    for (let i = 0; i < v.length; i++)
            c+= v[i] + " ";
    console.log(c);
}
function funcion(v,n) {
    let o=0;
    for (let i = 0; i < v.length; i++)
            if (v[i] == n)
                    o+=1;
}*/

// version arreglada:

import * as rls from "readline-sync";

let elem: number = rls.questionInt("Ingrese tamaño: ");// tamaño del arreglo arr[]
let arr:number [] = new Array(elem);//arr ver si es num
let nro: number = rls.questionInt("Ingrese numero: ");
let ocu:number [] = new Array();

cargar(arr);
mostrar(arr);
funcion(arr,nro);
funcion

function cargar(v:number []) {
    for (let i = 0; i < v.length; i++)
            v[i]=Math.floor(Math.random()*100);
}
function mostrar(v: number []) {
    let c="";
    for (let i = 0; i < v.length; i++)
            c+= v[i] + " ";
    console.log(c);
}
function funcion(v:number [],n: number) {
    let o=0;
    for (let i = 0; i < v.length; i++){
            if (v[i] == n)
                    o+=1;
    }
    console.log(`El numero ${n} ... ${v}`);
}