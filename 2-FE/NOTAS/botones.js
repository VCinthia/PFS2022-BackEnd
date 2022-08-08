
//https://www.youtube.com/watch?v=wp48fCSv-ow

const span=document.getElementById('span');//id del span para poder editar el contenido con btn
let contador = 0// Inicializo contador para sumar y restar en botones.

const btnClick = document.querySelector('.btn-dark')//arma la constante del boton 'dame click' segun su clase
const bgSuccess = document.querySelector('.bg-success')//constante para el div que contiene el boton 'dame click'

btnClick.addEventListener('click', (e)=>{
    console.log('click boton');
    e.stopPropagation();
});
bgSuccess.addEventListener('click',()=>{console.log('click bgSuccess')});

/* //RESOLUCION CON .addEventListener:

const btnAumentar = document.querySelector('.btn-info')//Captura el boton de aumento
const btnDisminuir = document.querySelector('.btn-danger') 

btnAumentar.addEventListener('click',()=>{//captura el click del evento y hace funcion de flecha para que realice el evento
    console.log('dar click aumentar');
    contador ++;
    span.textContent = contador;
});

btnDisminuir.addEventListener('click',()=>{
    console.log('dar click disminuir');
    contador --;
    span.textContent = contador;
}); */

//RESOLUCION CON eventDelegation:
const container = document.querySelector('.container');//capturo la clase 'container' que tiene el div de todo el contador

container.addEventListener('click', (e)=>{//Le indico que atienda el click y haga la funcion flecha, pasa parametro e de evento
    //console.log(e.target);//.target trae cada elemento que clickeas como html en console
    //console.log(e.target.classList.contains('btn-info'));//'classList' entra a las clases, 'contains(clase que busco)' para encontrar por clase
    if(e.target.classList.contains('btn-info')){
        contador++;
        span.textContent=contador;
    }else if(e.target.classList.contains('btn-danger')){
        contador--;
        span.textContent=contador;
    }
    e.stopPropagation()//para que solo considere los click en los contenedores que queremos
})

//STOP PROPAGATION - verificacion de que no imprime el diste click porque esta correctamente usado el stopPropagation
    document.body.addEventListener('click', ()=>{
        console.log('diste click');
    });

    