"use strict";
//Lo que sigue es para modificar el DOM sin conocer lo que hay en manejoDOM.html
//vamos a reemplazar el contenido texto de todos los tag h (h1,h2,h3,h4,h5,h6) por hache y el numero que acompaña al tag
//ATENCION: estamos presuponiendo que solo hay dos niveles de nodos. Y este codigo se dispara en el momento de la carga
//del html, no se realiza por eventos. Para realizarlo por evento, debemos encapsularlo en una funcion y asociar esta a
//un manejador de eventos o bien incluir el codigo como funcion anonima en un manejador de eventos.
let raiz, nodosHijos, nodosNietos;
//obtenemos el nodo raiz de la parte visible del html
raiz = document.getElementsByTagName("body");   
//obtenemos el conjunto de hijos del nodo raiz ([0] porque getElementsByTagName siempre retorna un arreglo)
nodosHijos=raiz[0].children;                    

if (nodosHijos.length > 0) {                                        //si hay elementos
    for (let i = 0; i < nodosHijos.length; i++) {                   //los recorremos
        if (nodosHijos[i].tagName.substring(0,1)=='H') {            //preguntando si son tags H's
            nodosHijos[i].innerHTML=                                //modificamos el contenido texto
                `hache${nodosHijos[i].tagName.substring(1,2)}`;     //concatenando hache al numero del tag
        }
        nodosNietos=nodosHijos[i].children;                         //repetimos la operacion para los hijos de cada nodo
        if (nodosNietos.length > 0) {
            for (let j = 0; j < nodosNietos.length; j++) {
                if (nodosNietos[j].tagName.substring(0,1)=='H') {
                    nodosNietos[j].innerHTML=
                        `hache${nodosNietos[j].tagName.substring(1,2)}`;
                }   
            }
        }
    }
} else {
    console.log('nada para hacer');
}

//Lo que sigue es para agregar elementos al DOM de manejoDOM.html
//Cuando pase por encima del tag identificado como elH3 se agregara una tabla, 
//con informacion que saco de la matriz datos, a continuacion de tag identificado como elH2
let disparador = document.getElementById('elH3');
disparador.addEventListener('mouseover', () => {
    //definimos las variables.
    let tabla, titulos, titulo, fila, celda;
    //informacion para la tabla
    let datos = [ [1,'televisor'], [2,'sillon'], [3,'heladera'] ]; //matriz con 2 columnas numero y nombre y 3 filas.

    //comenzamos agregando nodos
    //la tabla
    tabla = document.createElement('table');        //nuevo elemento table    
    tabla.id="tablaNueva";                          //se llamara tablaNueva
    //los titulos
    titulos = document.createElement('thead');      //nuevo elemento thead (es para los titulos de las columnas)
    titulo = document.createElement('th');          //nuevo elemento th (es para el primer titulo de columna)
    titulo.innerHTML="numero";                      //la primer columna dira numero
    titulos.appendChild(titulo);                    //agregamos el primer titulo al elemento titulos
    titulo = document.createElement('th');          //otro elemento th (es para el segundo titulo de columna)
    titulo.innerHTML="nombre";                      //la segunda columna dira nombre
    titulos.appendChild(titulo);                    //agregamos el segundo titulo al elemento titulos
    tabla.appendChild(titulos);                     //agregamos los titulos a la tabla
    //los elementos (como salen del arreglo datos, voy a recorrer el arreglo)
    for (let i = 0; i < datos.length; i++) {
        fila = document.createElement('tr');        //nuevo elemento tr (es para una fila de la tabla)
        fila.id=`fila${i}`;                         //le damos un nombre indicando que fila es
        celda = document.createElement('td');       //nuevo elemento td (es para la primer celda de una fila de la tabla)
        celda.innerHTML=datos[i][0];                //agregamos la info correspondiente a la primer columna (elemento [i][0] del arreglo)
        fila.appendChild(celda);                    //agregamos la celda a la fila
        celda = document.createElement('td');       //nuevo elemento td (es para la segunda celda de una fila de la tabla)
        celda.innerHTML="televisor";                //agregamos la info correspondiente a la segunda columna (elemento [i][1] del arreglo)
        fila.appendChild(celda);                    //agregamos la celda a la fila
        
        tabla.appendChild(fila);                    //agregamos la fila a la tabla
    }

    //por ultimo debemos vincular toda la estructura de tabla creada a un nodo de DOM para que aparezca en la pagina
    document.getElementById('elH2').appendChild(tabla);

    //Tambien se agregara un parrafo a continuacion con la misma tecnica:
    let parrafo = document.createElement('p');      //creamos el elemento p
    parrafo.innerHTML = 'ultimo parrafo';           //le damos contenido
    parrafo.id = "ultimoP";                         //tambien lo identificamos

    //por ultimo debemos vincular toda la estructura de tabla creada a un nodo de DOM para que aparezca en la pagina
    document.getElementById('elH2').appendChild(parrafo);
});


//Lo que sigue es para eliminar elementos al DOM de manejoDOM.html
//Cuando pase por encima del tag identificado como elH2 se eliminara la fila2 de la tabla, 
//y el parrafo identificado como ultimoP
let borrador = document.getElementById('elH2');
borrador.addEventListener('mouseover', () => {
    let fila2, ultimoP;
    fila2=document.getElementById('fila2');         //ubicamos el elemento correspondiente a la fila2
    while (fila2.hasChildNodes()) {                 //como sabemos que tiene hijos (que son las celdas) iteramos sobre estos
        fila2.removeChild(fila2.firstElementChild); //eliminando el primer hijo 
    }                                               //hasta que no haya mas hijos
    fila2.remove();                                 //y luego eliminamos el nodo de la fila2

    ultimoP=document.getElementById('ultimoP');     //ubicamos el elemento correspondiente a ultimoP
    ultimoP.remove();                               //y luego lo eliminamos (no es necesario ver si tiene hijos porque es un parrafo)
})

//Lo que sigue es para asignar/desasignar clases CSS al DOM de manejoDOM.html
//Cuando pase por encima del tag identificado como elH1 se activara la clase ocultar a los parrafos, 
//la cual ocultara aquellos parrafos que no posean la clase y mostrara aquellos parrafos que si la poseen.
//Adicionalmente se activara/desactivara la clase especial para el parrafo ultimoP
let ocultador = document.getElementById('elH1');
ocultador.addEventListener('mouseover', () => {
    let parrafos = document.getElementsByTagName('p');  //ubicamos todos los tag de tipo p
    for (let i = 0; i < parrafos.length; i++) {         //recorremos el arreglo que nos retorna el getElements...
        if (!(parrafos[i].id=='ultimoP'))               //excepto el llamado ultimoP que tiene otro cambio
            parrafos[i].classList.toggle('ocultar');    //activamos o desactivamos la clase ocultar.
    }
    //en una unica sentencia ubicamos el elemento correspondiente a ultimoP y a este le activamos o desactivamos la clase especial
    document.getElementById('ultimoP').classList.toggle('especial');    
});