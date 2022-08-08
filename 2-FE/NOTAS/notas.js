//https://bluuweb.github.io/javascript/02-dom/
"use strict";
//Buscar Elementos:
console.log(document.head);
console.log(document.body);
console.log(document.getElementById("mi-id"));
console.log(document.querySelector("#mi-id"));//elige el primero que tenga ese id
console.log(document.querySelector(".mi-id"));
console.log(document.querySelector("p"));
console.log(document.querySelectorAll("p"));//elige todos los que sean <p>

const parrafo = document.querySelector(".parrafo");//accedemos al elemento
parrafo.textContent = "Parrafo dinámico";//cambia el contenido

//-----------------------------------
//Element:

// Agregamos texto + etiquetas html
parrafo.innerHTML = "<b>Texto destacado</b> dentro de párrafo";

// Nos devuelve la clase del párrafo
console.log(parrafo.className);

// Agregamos una clase adicional
parrafo.classList.add("clase-adicional");
console.log(parrafo);

//-----------------------------------
//createElement():

// elemento donde vamos a incorporar los <li>
const lista = document.getElementById("lista-dinamica");

// Creamos el <li>
const li = document.createElement("li");

// Agregamos texto al <li>
li.textContent = "Mi <li> dinámico";

// Finalmente incorporamos al <ul>
lista.appendChild(li);

//-----------------------------------
//fragment:

/* const lista = document.getElementById("lista-dinamica");

  const arrayItem = ["item 1", "item 2", "item 3"];

  const fragment = document.createDocumentFragment();

  arrayItem.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    fragment.appendChild(li);
  });

  lista.appendChild(fragment); */

//-----------------------------------
// insertar primero:

/* const lista = document.getElementById("lista-dinamica");
  const arrayItem = ["item 1", "item 2", "item 3"];
  const fragment = document.createDocumentFragment();

  arrayItem.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;

    // Nos devuelve el primer elemento
    const referenceNode = fragment.firstChild;
    // En caso de que no exista un nodo hijo tirará null
    console.log("primer li", referenceNode);

    // Si "referenceNode" es null, el newNode se insertará al final de la lista de nodos hijos.
    // parentNode.insertBefore(newNode, referenceNode);
    fragment.insertBefore(li, referenceNode);
  });

  lista.appendChild(fragment); */
 
//----------------------------------- 
//Template HTML:

/* const lista = document.getElementById("lista-dinamica");
const arrayItem = ["item 1", "item 2", "item 3"];
const fragment = document.createDocumentFragment(); */

/* arrayItem.forEach((item) => {
  // creamos li
  const li = document.createElement("li");
  // agregamos clase a li
  li.classList.add("list");
  // creamos b
  const b = document.createElement("b");
  // agregamos texto a b
  b.textContent = "Nombre: ";
  // creamos span
  const span = document.createElement("span");
  // agregamos clase a span
  span.classList.add("text-danger");
  // agremos texto a span
  span.textContent = item;
  // agregamos nodo hijos a li
  li.appendChild(b);
  li.appendChild(span);
  // agregamos li al fragmente
  fragment.appendChild(li);
});

lista.appendChild(fragment); */

    //MEJOR SOLUCION:

    /* const lista = document.getElementById("lista-dinamica");
    const arrayItem = ["item 1", "item 2", "item 3"];

    const fragment = document.createDocumentFragment();
        const template = document.querySelector("#template-li").content;

    arrayItem.forEach((item) => {
    template.querySelector("span").textContent = item;
    const clone = template.cloneNode(true);
    // const clone = document.importNode(template, true);
    fragment.appendChild(clone);
    });

    lista.appendChild(fragment); */