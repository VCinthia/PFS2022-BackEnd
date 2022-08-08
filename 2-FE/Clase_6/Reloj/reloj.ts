"use strict";
let btnIniciar, btnParar, btnResetear, hReloj, reloj;
btnIniciar = document.getElementById('btnIniciar');
btnParar = document.getElementById('btnParar');
btnResetear = document.getElementById('btnReSetear');
hReloj = document.querySelector('h2');

let tiempo = 0;
//let tick = setTimeout(cambiaHora,1000);
btnIniciar.addEventListener('click', () => {
    reloj = setInterval(cambiaHora,100);    
});
btnParar.addEventListener('click', () => {
    clearInterval(reloj);
})
btnResetear.addEventListener('click', () => {
    tiempo = 0;
    hReloj.innerHTML=`00:00:00 -> 0 ticks`
});
function cambiaHora() {
    let hora, minuto, segundo;
    tiempo++;
    hora = Math.floor(tiempo/3600);
    minuto = Math.floor((tiempo-(hora*3600))/60);
    segundo = (tiempo-(hora*3600)-(minuto*60));
    hReloj.innerHTML=`${(hora<10)?'0':''}${hora}:${(minuto<10)?'0':''}${minuto}:${(segundo<10)?'0':''}${segundo} -> ${tiempo} ticks`;
}