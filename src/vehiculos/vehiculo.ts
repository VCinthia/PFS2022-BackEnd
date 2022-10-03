export class Vehiculo {
    public tipo : string;
    public marca : string;
    public patente : string;
    public modelo : string;
    public año : number;
    public precio : number;

    //public vehiculos : Vehiculo [] = [];
    /* public autos : Vehiculo [] = [];
    public camionetas : Vehiculo [] = []; */
    
    constructor(tipo : string, marca : string, patente : string, modelo : string, año : number, precio : number){
        this.tipo = tipo;
        this.marca = marca;
        this.patente = patente;//funcioan como id
        this.modelo = modelo;
        this.año = año;
        this.precio = precio;
    };

    public getTipo() : string { return this.tipo };
    public setTipo( tipo : string ) : void {this.tipo = tipo };
    public getMarca() : string { return this.marca };
    public setMarca( marca : string ) : void {this.marca = marca };
    public getPatente() : string { return this.patente };
    public setPatente( patente : string ) : void {this.patente = patente };
    public getModelo() : string { return this.modelo };
    public setModelo( modelo : string ) : void {this.modelo = modelo };
    public getAño() : number { return this.año };
    public setAño( año : number ) : void {this.año = año };
    public getPrecio() : number { return this.precio };
    public setPrecio( precio : number ) : void {this.precio = precio };
    public toString() : string{
        return `Vehiculo: { Tipo: ${this.tipo}, Marca: ${this.marca}, Patente: ${this.patente}, Modelo: ${this.modelo}, Año: ${this.modelo}, Año: ${this.año}, Precio: ${this.precio}}`
    }

    /* public saveVehiculo(vehiculo : Vehiculo): void{
        if(vehiculo){
            this.vehiculos.push(vehiculo);{
            if (vehiculo.tipo == 'auto'){
                this.autos.push(vehiculo);
                console.log(`Cargado en Autos el vehiculo ${vehiculo.patente}`);
                
            } else {
                if(vehiculo.tipo == 'camioneta'){
                    this.camionetas.push(vehiculo);
                    console.log(`Cargado en Camionetas el vehiculo ${vehiculo.patente}`);
                };
            }};
        };     
    }; */
}

/* async function agregarVehiculo(vehiculo, accion) {        
        let respuesta;
        switch (accion) {
            case 'A': {     //ALTA
                respuesta = await fetch('/post', {
                    method :'POST',
                    headers: { 'Content-Type' : 'application/json' },
                    body : JSON.stringify(vehiculo)
                });
        } 
        return ((await respuesta.text()) == "ok");
    }
} */

/* let vehiculo1 : Vehiculo = new Vehiculo('auto', 'Ford', 'aa25145', 'Fiesta', 2017, 2000000); */

/* vehiculo1.saveVehiculo(vehiculo1);//ok */
/* console.log(vehiculo1.getAutos());
vehiculo1.getCamionetas(); */
