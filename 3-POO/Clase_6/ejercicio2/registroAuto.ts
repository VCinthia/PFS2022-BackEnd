import Auto from "./auto";

export default class registroAutomotor{
    private vehiculos : Auto [];

    public constructor(){
    }

    //CRUD
    public createVehiculo(auto : Auto) : void {
        if (auto)
            this.vehiculos.push(auto);
    }
    public findVehiculo(auto : Auto) : boolean {
        for (let i = 0; i < this.vehiculos.length; i++) { 
            if (this.vehiculos[i] == auto) 
                console.log("El puesto buscado es correcto", this.vehiculos[i]);   
                return true; 
        }
        console.log("El puesto buscado es no existe");
        return false;        
    }
    public updateVehiculo(auto : Auto, posicion : number) : void {
        if(auto)
        this.vehiculos[posicion] = auto;
    }
    public deleteVehiculo(posicion : number) : void {
        if (this.vehiculos[posicion])
        this.vehiculos.splice(posicion);
    }
    public readVehiculo() : Auto[]{
        let vehiculos : Auto [] = [];
        this.vehiculos.forEach(auto =>{
            vehiculos.push(auto)
        });
        return vehiculos;
    }
    public readVehiculoTxt() : string {
        let textoVehiculo : string = '';
        this.vehiculos.forEach(auto => {
            textoVehiculo += auto.imprimir() + '\n';//?
        });
        return textoVehiculo;
    }
    public findVehiculoXMarca(marca : string) : Auto[] {
        let vehiculos : Auto[] = [];
        this.vehiculos.forEach(auto => {
            if(auto.getMarca() == marca)
                vehiculos.push(auto)
        });
        return vehiculos;
    }
}

