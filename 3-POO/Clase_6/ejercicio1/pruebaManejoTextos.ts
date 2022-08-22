import ManejoTextos from './ManejoTextos';
import Padre from './Padre';
import Hijo from './Hijo';

let info : Padre[] = [];
let fila : string[] = [];
let cantidadFilas : number = 0;
let MTP : ManejoTextos = new ManejoTextos('datosPadre.txt', ';', ',');
let MTH : ManejoTextos = new ManejoTextos('datosHijo.txt', '\r\n', '|');
MTP.leerArchivo();
MTH.leerArchivo();
MTP.getCantidadFilas();
cantidadFilas = MTP.getCantidadFilas();
for (let i = 0; i < cantidadFilas; i++) {
    fila = MTP.getFila(i);
    info.push(new Padre((fila[0]=='true'?true:false),parseInt(fila[1]),parseInt(fila[2])));    
}
console.log(info);
// info = [];
cantidadFilas = MTH.getCantidadFilas();
for (let i = 0; i < cantidadFilas; i++) {
    fila = MTH.getFila(i);
    info.push(new Hijo((fila[0]=='true'?true:false),parseInt(fila[1]),parseInt(fila[2]),fila[3],parseInt(fila[4])));    
}
console.log(info);
