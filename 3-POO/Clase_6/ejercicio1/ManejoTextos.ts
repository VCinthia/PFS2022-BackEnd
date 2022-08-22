import * as fs from 'fs';

export default class ManejoTextos {
    private nombreArchivo : string;
    private separadorFilas : string;
    private separadorColumnas : string;
    private datos : string[][] = [];

    constructor(archivo: string, separaFil: string, separaCol: string) {
        this.nombreArchivo=archivo;
        this.separadorFilas=separaFil;
        this.separadorColumnas=separaCol;
    }
    public leerArchivo() {
        let fila : string
        let texto : string = fs.readFileSync(this.nombreArchivo, 'utf8');
        //separamos las palabras en un arreglo usando el espacio como delimitador
        if (texto) {
            let filas : string[] = texto.split(this.separadorFilas);
            let fila : string
            for (let i = 0; i < filas.length; i++) {
                fila = filas[i];
                this.datos.push(fila.split(this.separadorColumnas));                
            }
            // filas.forEach(fila => {
            //     this.datos.push(fila.split(this.separadorColumnas));                
            // })            
        }
    }    
    public grabarArchivo(archivo : []) { //ver
        if(archivo)
        this.datos.push(archivo);
    }
    public getCantidadFilas() : number {
        return this.datos.length;
    }
    public getFila(posicion : number) : string[] {
        return this.datos[posicion];
    }
    public limpiarDatos(posicion : number) : void { //ver
        if (this.datos[posicion])
        this.datos.splice(posicion);
    }
    
}