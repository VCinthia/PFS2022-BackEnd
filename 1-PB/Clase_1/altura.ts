import * as readlineSync from 'readline-sync'
/*Cuando es texto readlineSync.question */ 
let texto : string = readlineSync.question('ingresa algo, porfa: ');
console.log('ingresaste: "', texto, '" .Gracias');
