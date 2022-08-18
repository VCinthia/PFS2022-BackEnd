import Helado from './helado'

export default class Heladeria {
    private nombre: string;
    private helados: Helado[];

    constructor (nombre: string) {
        this.nombre=nombre;
        this.helados=[];
    }
    public getNombre(): string {
        return this.nombre;
    }
    public setNombre(nombre: string): void {
        this.nombre = nombre;
    }
    //CRUDF  Create-Read-Update-Delete-Find - ABMLC
    public createHelados(helado: Helado) : void {
        if (helado) 
            this.helados.push(helado);        
    }
    public findHelados(helado: Helado) : number { //boolean en las buenas practicas
        for (let i = 0; i < this.helados.length; i++) { 
            if (this.helados[i] == helado)    
                return i; //true en las buenas practicas
        }
        return -1; //false en las buenas practicas
    }
    public updateHelados(helado: Helado, posicion: number) : void {
        if (helado)                             //opcion corta cambia instancia
            this.helados[posicion] = helado;   
        // if (helado && this.helados[posicion]) { //opcion larga cambia variables de instancia
        //     this.helados[posicion].setSabor(helado.getSabor());
        //     this.helados[posicion].setTipo(helado.getTipo());
        //     this.helados[posicion].setPrecio(helado.getPrecio());
        //     this.helados[posicion].setColor(helado.getColor());
        // }
    }
    public deleteHelados(posicion: number) : void {
        if (this.helados[posicion])
            this.helados.splice(posicion,1);
    }
    public readHelados() : Helado[] {
        let helados: Helado[] = [];
        this.helados.forEach(helado => {
            helados.push(helado)
        });
        return helados;
    }
    public readHeladosTxt() : string {
        let textoHelados : string = '';
        this.helados.forEach(helado => {
            textoHelados += helado.imprimir() + '\n'
        });
        return textoHelados;
    }   
    public findHeladosXTipo(tipo: string) : Helado[] {
        let helados: Helado[] = [];
        this.helados.forEach(helado => {
            if (helado.getTipo() == tipo)
                helados.push(helado)
        });
        return helados;
    }
}