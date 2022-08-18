import Heladeria from "./heladeria";
import Helado from "./helado";

let chocolate : Helado = new Helado('chocolate','crema',100,'marron');
let dulceDeLeche : Helado = new Helado('dulce de leche','crema',90,'marron claro');
let limon : Helado = new Helado('limon','agua',50,'blanco');

let miHeladeria : Heladeria = new Heladeria('Heladeria de Mauricio');

miHeladeria.createHelados(chocolate);
miHeladeria.createHelados(dulceDeLeche);

console.log(miHeladeria);
console.log(miHeladeria.leerHeladosTxt());

miHeladeria.updateHelados(limon, 1);
console.log(miHeladeria.leerHelados());

console.log(miHeladeria.leerHeladosTxt());

miHeladeria.deleteHelados(1);

console.log(miHeladeria.leerHeladosTxt());