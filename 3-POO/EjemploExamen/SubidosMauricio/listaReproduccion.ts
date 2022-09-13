import Audio from "./audio";
import Pista from "./pista";

export default class ListaReproduccion implements Audio {
    private nombre : string;
    private pistas : Pista[];
    
    constructor(nombre: string) {
        this.nombre = nombre;
        this.pistas = [];
    }

    public getNombre(): string { return this.nombre; }
    public setNombre(nombre: string): void { this.nombre = nombre; }

    public getDuracion(): number {
        let totalTiempo : number = 0;
        this.pistas.forEach(pista => {
            totalTiempo += pista.getDuracion();
        });
        return totalTiempo;
    }
    public getCantidad(): number {
        let totalAudios : number = 0;
        this.pistas.forEach(pista => {
            totalAudios += pista.getCantidad();
        });
        return totalAudios;        
    }

    public addPista(pista: Pista): void {
        try {
            if (pista)            
                this.pistas.push(pista);
            else
                throw new Error('No se recibio una pista valido')
        } catch (error) {
            console.log(`Error en alta: ${error.message}`);            
        }
    }
    public delPista(posicion: number): void {
        try {
            if (posicion >= 0)            
                this.pistas.splice(posicion, 1);                
            else
                throw new Error('No se recibio una posicion valida')
        } catch (error) {
            console.log(`Error en eliminacion: ${error.message}`);            
        }
    }
    public updPista(pista: Pista, posicion: number): void {
        try {
            if (pista && posicion >= 0)            
                this.pistas[posicion] = pista;                
            else if (posicion < 0)
                throw new Error('No se recibio una posicion valida')
            else
                throw new Error('No se recibio una pista valido')
        } catch (error) {
            console.log(`Error en actualizacion: ${error.message}`);            
        }
    }
    public getPosicionPista(pista: Pista): number {
        for (let i = 0; i < this.pistas.length; i++) 
            if (this.pistas[i].getIdentificador()==pista.getIdentificador()) 
                return i;
        return -1;
    }
    public estaVacia(): boolean {
        return (this.pistas.length == 0);
    }
    public toString(): string {
        return `Lista: ${this.getNombre}`
    }
    public listarPistas(): string {
        let lista : string = '';
        this.pistas.forEach(pista => {
            lista += `${pista.toString()}\n`
        });
        return lista;
    }
}