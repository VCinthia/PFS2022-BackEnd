/*• Para tener control de la gente que hay en una disco el gerente quiere saber cuantas personas de diferentes edades han entrado. 
• No se han permitido la entrada a menores de 18 ni mayores de 40. Para la carga de los datos se usa la función aleatorio  (use la función aleatorio(menorValor,mayorValor), es decir aleatorio(19,40))
• Se sabe que la cantidad total de personas dentro del local es de 270
• Se quiere saber: 
• Cuántas personas son menores de 21 años
• Cuántas personas mayores o igual a 21 años
• Cuántas personas en total*/

let edades: number [] = new Array(270);

function aleatorio(minimo: number, maximo: number): number{
    return Math.floor((Math.random()*(maximo-minimo) + minimo));

}

function rellenarEdades(v: number[]){
    for(let i=0;i< v.length; i++){
        v[i] = aleatorio(18,40);
    }
}

function contarMayores(edades:number []):number{
    let contador: number = 0;
    let i: number;
    for (let i=0; i < edades.length; i++){
        if (edades [i] >=21){
            contador++;
        }
    }
    return contador;// cuando da return debemos poner el tipo de funcion que es al final: contarMayores(edades:number []):number
}
rellenarEdades(edades);

let cantMayores21: number= contarMayores(edades);
let cantMenores21: number = edades.length - cantMayores21;

console.log(`En la disco hay ${edades.length} personas, de las cuales ${cantMayores21} son mayores de 21 y ${cantMenores21} son menores`);