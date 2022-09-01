import ManejoTextos from "../ejercicio1/ManejoTextos";
import registroAutomotor from "./registroAuto";


let info : registroAutomotor[] = [];
let fila : string[] = [];
let cantidadFilas : number = 0;
let MTRA : ManejoTextos = new ManejoTextos('datosAuto.txt', ';', ',');


MTRA.leerArchivo();
MTRA.getCantidadFilas();

cantidadFilas = MTRA.getCantidadFilas();

//sin armar
