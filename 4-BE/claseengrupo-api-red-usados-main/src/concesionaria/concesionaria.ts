import Vehiculo from "src/vehiculos/vehiculo";

export default class Concesionaria {
    private sede : string;
    private domicilio : string;
    private envioGratuito : boolean;
    private vehiculos : Vehiculo[] = [];
    
    constructor(sede : string, domicilio : string, envioGratuito : boolean) {
        this.sede=sede;        
        this.domicilio=domicilio;
        this.envioGratuito=envioGratuito;
    }
    
    public getSede(): string { return this.sede; }
    public setSede(sede: string): void { this.sede = sede; }
    
    public getDomicilio(): string { return this.domicilio; }
    public setDomicilio(domicilio: string): void { this.domicilio = domicilio; }
    
    public isEnvioGratuito(): boolean { return this.envioGratuito; }
    public setEnvioGratuito(envioGratuito: boolean): void { this.envioGratuito = envioGratuito; }

    public getVehiculos(): Vehiculo[] { return this.vehiculos; }
    public addVehiculo(vehiculo : Vehiculo) : string {
        try {
            if (vehiculo) {
                for (let i = 0; i < this.vehiculos.length; i++)
                    if (vehiculo.getDominio() == this.vehiculos[i].getDominio())
                        throw new Error('El vehiculo ya se encuentra.')
                this.vehiculos.push(vehiculo);
                return "ok";
            } else {
                throw new Error('No hay datos para agregar vehiculo.')
            } 
        } catch (error) {
            return error.message
        }
    }
    public delVehiculo(vehiculo : Vehiculo) {
        try {
            if (vehiculo) {
                for (let i = 0; i < this.vehiculos.length; i++)
                    if (vehiculo.getDominio() == this.vehiculos[i].getDominio()) {
                        this.vehiculos.splice(i,1);
                        return "ok";
                    }
                throw new Error('El vehiculo no se encuentra.')
            } else {
                throw new Error('No hay datos para eliminar vehiculo.')
            } 
        } catch (error) {
            return error.message
        }
    }

    public guardar() : string {
        let vehiculos : string = '';
        for (let i = 0; i < this.vehiculos.length; i++) 
            vehiculos += `${i==0?'':'-'}${this.vehiculos[i].getDominio()}-`;
        return `${this.sede},${this.domicilio},${this.envioGratuito?1:0},${vehiculos}`;
    }
}