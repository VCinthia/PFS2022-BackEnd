import Vehiculo from "./vehiculo";

export default class Camioneta extends Vehiculo {
    private capacidad: number = 0;

    constructor (dominio: string, precio: number, marca: string, modelo:string, año:number, km:number, capacidad? : number) {
        super(dominio, precio, marca, modelo, año, km, 'Camioneta');
        if (capacidad) this.capacidad=capacidad;
    }

    public getCapacidad(): number { return this.capacidad; }
    public setCapacidad(capacidad: number): void { this.capacidad = capacidad; }
    public mostrar() : string {
        return `Camioneta { Dominio: ${this.dominio} es un ${this.marca}-${this.modelo} modelo ${this.año} con ${this.kilometraje} kilometros y un precio de ${this.precio.toString()}, posee ${this.capacidad} de capacidad}`;
    }
    public getTipo(): string {
        return 'Camioneta';
    }
    public guardar(): string {
        let datos : string;
        datos = `${super.getDominio()},${super.getPrecio().toString()},${super.getMarca()},${super.getModelo()},${super.getAño().toString()},${super.getKilometraje().toString()},${this.getCapacidad().toString()}`;
        return datos;
    }
}