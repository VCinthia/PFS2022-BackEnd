import ErrorControlado from "./errorControlado";

function sumarValores(valores: string[]): number {
    if (valores.length == 0)
        // throw new Error('No se pueden sumar los valores de un arreglo vacío')
        throw new ErrorControlado('No se pueden sumar los valores de un arreglo vacío')
    try {        
        let sumaTotal = 0;
        for (let i = 0; i < valores.length; i++) {
            if (isNaN(parseInt(valores[i])))
                throw new Error('No se pueden sumar valores de tipo texto');
            sumaTotal += parseInt(valores[i]);
        }
        return sumaTotal;
    } catch (error) {
        console.log(`ocurrio un ${this.name} sumando elementos del arreglo : ${error.message}, seteando resultado en 0`);
        console.log('');
        return 0;
    }
}

let valores : string[] = [ '0', '1', '2', '3', 'nada', '5'];
let resultado: number;
try {
    resultado = sumarValores(valores);
    valores = [];
    resultado = sumarValores(valores);
} catch(error) {
    console.log(`ocurrió un ${error.name} : ${error.message}, seteando resultado en 0`);
    console.log('');
    resultado = 0;
}
console.log(`El resultado de sumar el arreglo es: ${resultado}`);
console.log('');
