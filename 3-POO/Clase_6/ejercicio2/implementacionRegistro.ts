import ManejoTextos from "../soluciones1/ManejoTextos";
import registroAutomotor from "./registroAuto";


let info : registroAutomotor[] = [];
let fila : string[] = [];
let cantidadFilas : number = 0;
let MTRA : ManejoTextos = new ManejoTextos('datosAuto.txt', ';', ',');


MTRA.leerArchivo();
MTRA.getCantidadFilas();

cantidadFilas = MTRA.getCantidadFilas();

for (let i = 0; i < cantidadFilas; i++) {
    fila = MTRA.getFila(i);
    info.push(new registroAutomotor( /**/ ));   //sin terminar 
}
console.log(info);

