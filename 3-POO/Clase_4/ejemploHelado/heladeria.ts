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
    //CRUD  Create-Read-Update-Delete-fIND - ABMLC
    public createHelados(helado: Helado) : void {
        if (helado) 
            this.helados.push(helado);        
    }
    public leerHelados() : Helado[] {
        let helados: Helado[] = [];
        this.helados.forEach(helado => {
            helados.push(helado)
        });
        return helados;
    }
    public updateHelados(helado: Helado, posicion: number) : void {
        if (helado)                             //opcion corta cambia instancia
            this.helados[posicion] = helado;   
        // if (helado && this.helados[posicion]) { //opcion corta cambia variables de instancia
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
    public leerHeladosTxt() : string {
        let textoHelados : string = '';
        this.helados.forEach(helado => {
            textoHelados += helado.imprimir() + '\n'
        });
        return textoHelados;
    }
}