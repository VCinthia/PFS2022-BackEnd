import Concesionaria from "src/concesionaria/concesionaria";
import Vehiculo from "./vehiculo";

export default class UsadosLugar {
    private dominio : string;
    private lugar : string;
    private nombreRed : string;   
    constructor(dominio: string, lugar : string, nombreRed : string ) {
        this.dominio = dominio;
        this.lugar=lugar;  
        this.nombreRed = nombreRed;
            
    }

    public getDominio(): string { return this.dominio; }
    public getLugar(): string { return this.lugar; }
    public getNombreRed(): string { return this.nombreRed;}
}