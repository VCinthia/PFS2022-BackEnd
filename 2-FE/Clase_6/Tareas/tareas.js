'use strict';
let tarea = document.getElementById('txtTarea');
let boton = document.getElementById('btnTarea');
let tareas = document.getElementById('tareas');

boton.addEventListener('click', () => {
    let fila, celda, tilde;
    if (tarea.value != '') {
        fila = document.createElement('tr');
        celda = document.createElement('td');
        celda.innerHTML = tarea.value;
        fila.appendChild(celda);
        tilde = document.createElement('input');
        tilde.type = "checkbox";
        tilde.value = false;
        fila.appendChild(tilde);
        tareas.appendChild(fila);
    }
});