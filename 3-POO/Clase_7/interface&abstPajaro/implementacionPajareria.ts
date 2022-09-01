import Pajareria from "./pajareria";
import Pajaro from "./pajaro";

let golondrina : Pajaro = new Pajaro('Golondrina', 15, 16, 100, 1, 8, 2, 1, 'Hirundinidae',2,4);
let lechuza : Pajaro = new Pajaro('Lechuza',25,150,100,4,8,5,30,"Athene Cunicularia",3,20);
let gorrion : Pajaro = new Pajaro('Gorrión',14,30,100,3,8,4,2,'Passer Domesticus',1,20);

let primerPajareria : Pajareria = new Pajareria('Pajareria variada');

primerPajareria.createPajaros(golondrina);
primerPajareria.createPajaros(lechuza);
primerPajareria.createPajaros(gorrion);

console.log(primerPajareria.readPajarosTxt());// trae los pajaros del console.log imprimir, el undifined es porque no tiene return?

console.log(primerPajareria.findPajarosXEspecie('Hirundinidae'));//ok
console.log(primerPajareria.findPajarosXEspecie('Passer Domesticus'));//ok

console.log(primerPajareria.findPajaros(golondrina));//ok



