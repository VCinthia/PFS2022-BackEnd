import { Injectable } from '@nestjs/common';
import * as FS from 'fs';
import { Vehiculo } from './vehiculo';

@Injectable()
export class VehiculosService {
    /* public tipo : string; //0
    public marca : string; //1
    public patente : string; //2
    public modelo : string; //3
    public año : number; //4
    public precio : number; //5
 */
    private listaVehiculos : Vehiculo[] = [];
    //private listaAutos : Vehiculo[] = [];
    //private listaCamionetas : Vehiculo[] = [];
    
    constructor(){
        this.loadVehiculos();//carga vehiculos
    };

    public getvehiculos() : Vehiculo[]{//Obtiene los vehiculos
        return this.listaVehiculos;
    };

    public getVehiculo(patente : string) : Vehiculo { //Obtiene un vehiculo x patente 
        for(let i = 0; i < this.listaVehiculos.length; i++){
            if(this.listaVehiculos[i].getPatente()== patente)
            return this.listaVehiculos[i];
            
        };
    };

    public getXTipo(tipo : string) : Vehiculo { //Obtiene los vehiculos por tipo: auto o camioneta
        for(let i = 0; i < this.listaVehiculos.length; i++){
            if(this.listaVehiculos[i].getTipo() == tipo)
            return this.listaVehiculos[i];
        };
    };
        
    /* public getAutos() {
        return this.listaAutos;
        //console.log(this.autos);        
    };
       public getCamionetas() : any {
        return this.listaCamionetas;
        //console.log(this.listaCamionetas);
    }; */

    public saveVehiculo(): void{
        FS.writeFileSync('.\\recursos\\mockVehiculos.txt', '');
        for(let i = 0; i < this.listaVehiculos.length; i++){
            let vehiculo = this.listaVehiculos[i];
            FS.appendFileSync('.\\recursos\\mockVehiculos.txt',
            `${i==0?'':'\n'}${vehiculo.getTipo()},${vehiculo.getMarca()},${vehiculo.getPatente()},${vehiculo.getModelo()},${vehiculo.getAño()},${vehiculo.getPrecio()}}`
            );
            //no requiero de esas listas porque puedo traerlas por 'tipo'
            /* if (vehiculo.tipo == 'auto'){
                this.listaAutos.push(vehiculo);
                console.log(`Cargado en Autos el vehiculo ${vehiculo.patente}`);                
            } else {
                if(vehiculo.tipo == 'camioneta'){
                    this.listaCamionetas.push(vehiculo);
                    console.log(`Cargado en Camionetas el vehiculo ${vehiculo.patente}`);
                };
            } */
        };
    };

    private loadVehiculos(){
        let vehiculo : Vehiculo;
        let texto : string = FS.readFileSync('.\\recursos\\mockVehiculos.txt', 'utf8');
        if(texto){
            this.listaVehiculos = [];
            let registros = texto.split('\n');
            for(let i = 0; i < registros.length; i++) {
                let registro = registros[i].split(',');
                vehiculo = new Vehiculo(registro[0], registro[1], registro[2], registro[3], parseInt(registro[4]),parseInt(registro[5]) )
                this.listaVehiculos.push(vehiculo);
            };
        };
    };   

    public addVehiculo(vehiculoNuevo : any) : string {
        let vehiculo = new Vehiculo(vehiculoNuevo.tipo,vehiculoNuevo.marca, vehiculoNuevo.patente, vehiculoNuevo.modelo, vehiculoNuevo.año, vehiculoNuevo.precio);
        if(vehiculo.getTipo() && vehiculo.getMarca() && vehiculo.getPatente() && vehiculo.getModelo() && vehiculo.getAño() && vehiculo.getPrecio()){
            this.listaVehiculos.push(vehiculo);
            this.saveVehiculo();
            this.loadVehiculos();
            return 'ok';
        } else {
            return 'Error en la carga, revisar parametros';
        }
    };
};
