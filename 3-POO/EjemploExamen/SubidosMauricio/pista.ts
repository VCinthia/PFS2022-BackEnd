import Audio from "./audio";

export default class Pista implements Audio {
    private identificador: number;
    private titulo: string;
    private duracion: number;
    private interprete: string; //Interprete puede ser otro Objeto

    constructor(identificador: number, titulo: string, duracion: number, interprete: string) {
        this.identificador=identificador;
        this.titulo=titulo;
        this.duracion=duracion;
        this.interprete=interprete;
    }
    public getIdentificador(): number { return this.identificador; }
    public setIdentificador(identificador: number): void { this.identificador = identificador; }
    public getTitulo(): string { return this.titulo; }
    public setTitulo(titulo: string): void { this.titulo = titulo; }
    public getDuracion(): number { return this.duracion; }
    public setDuracion(duracion: number): void { this.duracion = duracion; }
    public getInterprete(): string { return this.interprete; }
    public setInterprete(interprete: string): void { this.interprete = interprete; }
    public toString(): string {
        return `Pista { Titulo: ${this.titulo} dura ${this.duracion} segundos, interpretada por ${this.interprete} }`;
        //return `Pista { Titulo: ${this.titulo} dura ${this.duracion} segundos, interpretada por ${this.interprete.toString()} }`
    }
    public getCantidad(): number { return 1; }
}