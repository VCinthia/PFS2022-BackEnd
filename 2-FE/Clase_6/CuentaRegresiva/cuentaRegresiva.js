"use strict";
let btnInicia, btnInicia2, contenedor;
btnInicia = document.getElementById("btnIniciar");
btnInicia2 = document.getElementById("btnIniciar2");
contenedor = document.getElementById('contenedor');
let i = 10;    
let tiempoEspera = 0;
let timerEspera;

let texto = document.createElement('h1');
texto.innerHTML = `${i}`;
contenedor.appendChild(texto);

controlarUsuario();

btnInicia.addEventListener('click', cuentaRegre);

btnInicia2.addEventListener('click', () => {
    let timer = setTimeout(cuentaRegre, 10000);    
});

function cuentaRegre() {    
    clearInterval(timerEspera);
    let intervalo = setInterval(() => {
        if (i === 0) {
            clearInterval(intervalo);
            texto.innerHTML='BOOOOOM!!';
            i = 10;
        } else {
            --i;
            texto.innerHTML = `${i}`;
        }
    }, 100);
    controlarUsuario();
}
function controlarUsuario() {
    timerEspera = setInterval(() => {
        tiempoEspera++;
        console.log(tiempoEspera);
        if (tiempoEspera == 5) {
            alert('Despertate');
            tiempoEspera=0;
        }
    },1000);
}