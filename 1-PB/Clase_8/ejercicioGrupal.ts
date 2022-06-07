let equipo : number [] = new Array (11);

function aleatoria(minimo: number, maximo: number): number{
    return Math.floor((Math.random()*(maximo-minimo) + minimo));

}
//
for (let i=0; i< equipo.length; i++){
    equipo[i]= aleatoria(3,7);
    //suma+= equipo[i]
}

function promediarEdades(v: number[]): number { //v es la variante que va a pasar pero no se le agrega let. Es una variable local
    let suma: number = 0;
    for (let i=0; i< equipo.length; i++){
        equipo[i]= aleatoria(3,7);
        suma+= v[i];
    }
    return Math.floor(suma/v.length*100)/100;
}

console.log(`Las edades del equipo son ${equipo}`);
console.log(`El promedio de las edades del equipo es ${promediarEdades(equipo)}` );

