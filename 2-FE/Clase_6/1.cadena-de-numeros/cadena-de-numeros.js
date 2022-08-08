"use strict";
var cadenaDeNum = new Array(100);
var btnGenerarCadena;
btnGenerarCadena = document.getElementById('btnGenerarCadena');
btnGenerarCadena.addEventListener("click", cargar100);
/*let mostrarCadena =document.getElementById('cadenaDeNum') as HTMLInputElement;mostrarCadena.value="";*/
/*function mostrarCadena(){
    mostrarCadena.innerHTML= `${cargar100}`;
}*/
function cargar100(cadenaDeNum) {
    var i = 0;
    for (i = 0; i <= cadenaDeNum.length; i++) {
        //cadenaDeNum[i]= i+1;   
        cadenaDeNum[i] += 1;
    }
    //console.log(`Cadena de numeros del 1 al 100: ${cadenaDeNum.toString()}`);
    console.log("Cadena de numeros del 1 al 100: " + cadenaDeNum);
}
