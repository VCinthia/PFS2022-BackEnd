export default abstract class Vehiculo {
    protected dominio: string;
    protected marca: string;
    protected modelo: string;
    protected año: number;
    protected precio: number;
    protected kilometraje: number;    
    protected tipo: string;

    constructor(dominio: string, precio: number, marca: string, modelo: string, año: number, km: number, tipo: string) {
        this.dominio=dominio;
        this.precio=precio;
        this.marca=marca;
        this.modelo=modelo;
        this.año=año;
        this.kilometraje=km;
        this.tipo=tipo;
    }

    public getDominio(): string { return this.dominio; }
    public setDominio(dominio: string): void { this.dominio = dominio; }

    public getPrecio(): number { return this.precio; }
    public setPrecio(precio: number): void { this.precio = precio; }

    public getMarca(): string { return this.marca; }
    public setMarca(marca: string): void { this.marca = marca; }

    public getModelo(): string { return this.modelo; }
    public setModelo(modelo: string): void { this.modelo = modelo; }

    public getAño(): number { return this.año; }
    public setAño(año: number): void { this.año = año; }

    public getKilometraje(): number { return this.kilometraje; }
    public setKilometraje(km: number): void { this.kilometraje = km; }

    abstract getTipo(): string;
    abstract mostrar(): string;
    abstract guardar(): string;
}