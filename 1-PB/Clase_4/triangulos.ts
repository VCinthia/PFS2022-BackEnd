import * as rls from "readline-sync";

    let base = rls.questionInt("Ingrese un numero para la base: ")
    let altura = rls.questionInt("Ingrese un numero para la altura: ")

function calcularAreaTriangulo(base:number, altura:number):number{
    
    return ((base * altura)/2);
};

console.log("El area del triangulo es: ", calcularAreaTriangulo(base, altura));


