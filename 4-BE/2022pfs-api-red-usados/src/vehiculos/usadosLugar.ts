import Vehiculo from "./vehiculo";

export default class UsadosLugar {
    private dominio : string;
    private lugar : string;    

    constructor(dominio: string, lugar : string) {
        this.dominio = dominio;
        this.lugar=lugar;        
    }

    public getDominio(): string { return this.dominio; }
    public getLugar(): string { return this.lugar; }
}