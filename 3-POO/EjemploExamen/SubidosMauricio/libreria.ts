import Pista from "./pista";
import ListaReproduccion from "./listaReproduccion";

let tema1: Pista = new Pista(1, "El Tiempo No Para", 311, "Bersuit Vergarabat");
let tema2: Pista = new Pista(2, "Mi Caramelo", 290, "Bersuit Vergarabat");
let tema3: Pista = new Pista(3, "Party Rock Anthem", 408, "LMFAO");
let tema4: Pista = new Pista(4, "Sorry for Party Rocking", 421, "LMFAO");
let tema5: Pista = new Pista(5, "Fix You", 255, "Coldplay");
let tema6: Pista = new Pista(6, "Speed of Sound", 455, "Coldplay");
let tema7: Pista = new Pista(7, "Viva la Vida", 320, "Coldplay");
let tema8: Pista = new Pista(8, "With or Without You", 360, "U2");
let tema9: Pista = new Pista(9, "Vertigo", 355, "U2");
let tema10: Pista = new Pista(10, "City of Blinding Lights", 284, "U2");
let tema11: Pista = new Pista(11, "A la Luz de la Luna", 438, "El Indio Solari");
let tema12: Pista = new Pista(12, "Yo Canibal", 258, "Patricio Rey y sus Redonditos de Ricota");

let base = new ListaReproduccion('ListaReproduccion Base');
base.addPista(tema1);
base.addPista(tema2);
base.addPista(tema3);
base.addPista(tema4);
base.addPista(tema5);
base.addPista(tema6);
base.addPista(tema7);
base.addPista(tema8);
base.addPista(tema9);
base.addPista(tema10);
base.addPista(tema11);
base.addPista(tema12);

let lista1 = new ListaReproduccion("Clasicos del Rock");
lista1.addPista(tema1);
lista1.addPista(tema2);
lista1.addPista(tema8);
lista1.addPista(tema9);
lista1.addPista(tema10);
lista1.addPista(tema12);

let lista2 = new ListaReproduccion("Lo mejor");
lista2.addPista(tema3);
lista2.addPista(tema4);
lista2.addPista(tema7);
lista2.addPista(tema12);

let lista3 = new ListaReproduccion("Coldplay");
lista3.addPista(tema5);
lista3.addPista(tema6);
lista3.addPista(tema7);

let lista4 = new ListaReproduccion("El Indio");
lista4.addPista(tema12);
lista4.addPista(tema11);

let lista5 = new ListaReproduccion("Bach");

console.log(listarLista(lista1));
console.log(listarLista(lista2));
console.log(listarLista(lista3));
console.log(listarLista(lista4));
console.log(listarLista(lista5));

function listarLista(lista: ListaReproduccion): string {
    let datosLista : string = '';
    if (!lista.estaVacia()) {
        datosLista += `Lista: ${lista.getNombre()} tiene ${lista.getCantidad()} audios y dura ${lista.getDuracion()} segundos`;
        datosLista += `\n${lista.listarPistas()}`;
    } else {
        datosLista += `Lista: ${lista.getNombre()} esta vacia`;
    }
    return datosLista;
}