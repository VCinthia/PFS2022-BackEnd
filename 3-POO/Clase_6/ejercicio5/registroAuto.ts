import Vehículo from "./auto";

import Color from "./color";

export default class registroAutomotor extends Vehículo{
    private vehiculos : Vehículo [];
    /* private tipo: string; */
    private capacidad : number;
    private cantEjes : number;
    

    public constructor(cantEjes : number, capacidad : number, /* tipo : string, */ patente:string, titular:string, marca:string, modelo:string, año:number, color:Color){
        super(patente, titular,marca,modelo,año,color);
        /* this.tipo = tipo; */
        this.capacidad = capacidad;
        this.cantEjes = cantEjes;
    }

    //CRUD --------------------- Hacer que cuando cree lo guarde en un arreglo segun su tipo?

    public createVehiculo(vehiculo : Vehículo) : void {
        if (vehiculo)
            this.vehiculos.push(vehiculo);
    }
    public findVehiculo(vehiculo : Vehículo) : boolean {
        for (let i = 0; i < this.vehiculos.length; i++) { 
            if (this.vehiculos[i] == vehiculo) 
                console.log("El puesto buscado es correcto", this.vehiculos[i]);   
                return true; 
        }
        console.log("El puesto buscado es no existe");
        return false;        
    }
    public updateVehiculo(vehiculo : Vehículo, posicion : number) : void {
        if(vehiculo)
        this.vehiculos[posicion] = vehiculo;
    }
    public deleteVehiculo(posicion : number) : void {
        if (this.vehiculos[posicion])
        this.vehiculos.splice(posicion);
    }
    public readVehiculo() : Vehículo[]{
        let vehiculos : Vehículo [] = [];
        this.vehiculos.forEach(vehiculo =>{
            vehiculos.push(vehiculo)
        });
        return vehiculos;
    }
    public readVehiculoTxt() : string {
        let textoVehiculo : string = '';
        this.vehiculos.forEach(vehiculo => {
            textoVehiculo += vehiculo.imprimir() + '\n';//?
        });
        return textoVehiculo;
    }
    public findVehiculoXMarca(marca : string) : Vehículo[] {
        let vehiculos : Vehículo[] = [];
        this.vehiculos.forEach(vehiculo => {
            if(vehiculo.getMarca() == marca)
                vehiculos.push(vehiculo)
        });
        return vehiculos;
    }
}

