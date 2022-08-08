import * as fs from 'fs';

//leemos el archivo de texto como una unica cadena de texto
let texto : string = fs.readFileSync('abc.txt', 'utf-8');
//separamos la palabras en un arreglo usando el espacio como delimitador
let palabras : string[] = texto.split(' ');
//listamos las palabras
console.log(`Antes: ${palabras}`);

//alteramos las palabras y concatenamos el arreglo en una unica cadena separada por espacios
texto = '';
palabras.forEach(palabra =>{
    palabra = palabra.toUpperCase();
    texto += palabra + ' '
});
//guardamos la cadena en el archivo de texto
fs.writeFileSync('abc.txt', texto);

//re-leemos el archivo de texto como una unica cadena de texto
texto = fs.readFileSync('abc.txt', 'utf-8');
//separamos las palabras en un arreglo usando el espacio como delimitador
palabras = texto.split(' ');
//listamos las palabras
console.log((`Despues: ${palabras}`));

