import * as rls from "readline-sync";

let frase : string = rls.question("Ingrese una frase: ");
let cuentaLetras : number[] = new Array(26);// array que puede guardar 1 o mas cantidad de letras por posicion. Ejem:[0,3]= 3 veces la b
let letras : string = "abcdefghijklmnopqrstuvwxyz";

/*1*/contarLetras(frase, cuentaLetras, letras);

/*4*/console.log(`La frase: ${frase} tiene ${listarCuenta(cuentaLetras, letras)}`);

/*2*/function contarLetras(texto: string, cantidades: number[], letras : string){
    texto=texto.trim();
    texto=texto.toLowerCase();
    let i1=0;
    let i2=0;
    for(i1; i1< cantidades.length; i1++){
        cantidades [i1]=0;
    }
    for(i1=0; i1<letras.length; i1++) {
        for(i2=0; i2<texto.length; i2++){
            if(letras[i1]==texto[i2]){
              cantidades[i1]++;//contar cuantas veces esta cada letra 
            }
        }

    }
}

/*3*/function listarCuenta(cantidades: number[], letras:string):string{//mostrar cuantas veces esta cada letra

    let cuantasVecesCadaLetra : string = "";
    let i=0;
        
    for (i; i< letras.length ; i++) {// recorre la frase y pasa por las letras para encontrar la cantidad
        if (cantidades[i]>0) {
        cuantasVecesCadaLetra += (cantidades[i].toString()+": ") + letras[i]+", ";//ver toString, lo convierte a string para "cuantasVecesCadaLetra : string"
        } 
    }
    return cuantasVecesCadaLetra;    
}