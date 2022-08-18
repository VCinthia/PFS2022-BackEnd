import Heladeria from "./heladeria";
import Helado from "./helado";

let chocolate : Helado = new Helado('chocolate','crema',100,'marron');
let dulceDeLeche : Helado = new Helado('dulce de leche','crema',90,'marron claro');
let limon : Helado = new Helado('limon','agua',50,'blanco');

let miHeladeria : Heladeria = new Heladeria('Heladeria de Mauricio');

miHeladeria.createHelados(chocolate);
miHeladeria.createHelados(dulceDeLeche);
miHeladeria.createHelados(limon);
console.log(miHeladeria.readHeladosTxt());
console.log(miHeladeria.findHeladosXTipo('crema'));
console.log(miHeladeria.findHeladosXTipo('agua'));
console.log(miHeladeria.findHeladosXTipo('leche vegetal'));
// miHeladeria.updateHelados(limon, 1);
// console.log(miHeladeria.readHeladosTxt());
// miHeladeria.deleteHelados(1);
// console.log(miHeladeria.readHeladosTxt());
if (miHeladeria.findHelados(chocolate) != -1) {
    console.log('Chocolate esta.');
} else {
    console.log('Chocolate no esta.');
}
// let posicionLimon: number = miHeladeria.findHelados(dulceDeLeche);
// if (posicionLimon != -1) {
//     miHeladeria.updateHelados(limon, posicionLimon);
// } else {
//     miHeladeria.createHelados(limon);
// }
// console.log(miHeladeria.readHeladosTxt());