const nombApell = document.getElementById('nombre-apellido')
const fecha = document.getElementById('fecha')
const materia = document.querySelector('.form-select')

const arrayAsistencia = [nombApell, fecha, materia];

const btnAgregar = document.querySelector('btn btn-primary')
const btnEliminar = document.querySelector('btn btn-danger')

/* btnAgregar.addEventListener('click', (e)=>{
    console.log('click boton agregar');
    e.stopPropagation();
});
btnEliminar.addEventListener('click',()=>{
    console.log('click boton eliminar')
});
 */
const fragment = document.createDocumentFragment()

const valores = document.querySelector('.valores');//capturo la clase 'valores' que tiene el div 

valores.addEventListener('click', (arrayAsistencia)=>{//Le indico que atienda el click y haga la funcion flecha, pasa parametro arrayAsistencia de evento
    if(arrayAsistencia.target.classList.contains('btn-primary')){
        const template = document.querySelector('.container overflow-hidden').value;// con el content podemos acceder directamente a sus elementos: *1
        arrayAsistencia.forEach((nombApell, fecha, materia) =>{
            template.getElementById('devuelNyA').value = nombApell;
            template.getElementById('devuelFecha').value = fecha;
            template.getElementById('devuelveMat').value = materia;
            const clone = template.cloneNode(true);//crea una constante que clone el template que creamos
            fragment.appendChild(clone)//agregamos clone a fragment
        })
        valores.appendChild(fragment);//agrega fragment a la clase valores que esta en Contenedor de info devuelta>
    }else if(arrayAsistencia.target.classList.contains('btn-danger')){
        document.innerHTML = ''//lo vuelve vacio
    }
    e.stopPropagation()//para que solo considere los click en los contenedores que queremos
})

//STOP PROPAGATION - verificacion de que no imprime el diste click porque esta correctamente usado el stopPropagation
document.body.addEventListener('click', ()=>{
    console.log('diste click');
});