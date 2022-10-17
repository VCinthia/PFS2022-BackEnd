import { Injectable } from '@nestjs/common';
import * as FS from 'fs';
import Concesionaria from './concesionaria';
import Vehiculo from 'src/vehiculos/vehiculo';
import { VehiculoService } from 'src/vehiculos/vehiculo.service';

@Injectable()
export class ConcesionariaService {
    private concesionarias : Concesionaria[] = [];
    private vehiculoService : VehiculoService;

    constructor() {
        this.vehiculoService = new VehiculoService();
        this.loadConcesionarias();
    }

    public listConcesionarias() : Concesionaria[] {
        return this.concesionarias;
    }
    public listConcesionaria(criterio : string) : Concesionaria {
        for (let i = 0; i < this.concesionarias.length; i++) {
            if (this.concesionarias[i].getSede() == criterio)
                return this.concesionarias[i];            
        }
        return null;
    }
    public addConcesionaria(datos : any) : string {
        try {
            let concesionaria : Concesionaria;
            if (datos)
                if (datos.sede && datos.domicilio) {
                    for (let i = 0; i < this.concesionarias.length; i++) {
                        if (this.concesionarias[i].getSede()==datos.sede) 
                            throw new Error('La concesionaria ya se encuentra.')
                    }                    
                    concesionaria = new Concesionaria(datos.sede, datos.domicilio, datos.envioGratuito);
                    if (datos.vehiculos) {
                        datos.vehiculos.forEach(dato => {
                            let vehiculo : Vehiculo = this.vehiculoService.listarVehiculo(dato.dominio);
                            concesionaria.addVehiculo(vehiculo);
                        });
                    }
                    this.concesionarias.push(concesionaria);
                    this.saveConcesionarias();
                    this.loadConcesionarias();
                    return "ok";
                }
                else
                    throw new Error('Los datos para crear concesionaria no son validos');
            else
                throw new Error('No hay datos para crear concesionaria');
        } catch (error) {
            return error.message;            
        }
    }
    public delConcesionaria(datos : any) : string {
        try {
            if (datos)
                if (datos.sede) {
                    for (let i = 0; i < this.concesionarias.length; i++) 
                        if (this.concesionarias[i].getSede()==datos.sede) {
                            this.concesionarias.splice(i,1);
                            this.saveConcesionarias();
                            this.loadConcesionarias();
                            return "ok";
                        }
                    throw new Error('La concesionaria no se encuentra.')
                }
                else
                    throw new Error('Los datos para eliminar concesionaria no son validos');
            else
                throw new Error('No hay datos para eliminar concesionaria');
        } catch (error) {
            return error.message;            
        }
    }
    public updConcesionaria(datos : any) : string {
        try {
            let concesionaria : Concesionaria;
            if (datos)
                if (datos.sede && datos.domicilio) {
                    for (let i = 0; i < this.concesionarias.length; i++) 
                        if (this.concesionarias[i].getSede()==datos.sede) {
                            concesionaria = new Concesionaria(datos.sede, datos.domicilio, datos.envioGratuito);                             
                            if (datos.vehiculos) {
                                datos.vehiculos.forEach(dato => {
                                    let vehiculo : Vehiculo = this.vehiculoService.listarVehiculo(dato.dominio);
                                    concesionaria.addVehiculo(vehiculo);
                                });
                            }
                            this.concesionarias[i] = concesionaria;
                            this.saveConcesionarias();
                            this.loadConcesionarias();
                            return "ok";
                        }
                    throw new Error('La concesionaria no se encuentra.')
                }
                else
                    throw new Error('Los datos para modificar concesionaria no son validos');
            else
                throw new Error('No hay datos para modificar concesionaria');
        } catch (error) {
            return error.message;            
        }
    }

    //
    private loadConcesionarias() {
        try {
            let concesionaria : Concesionaria;
            let envioGratuito : boolean;
            let texto : string = FS.readFileSync('.\\datos\\concesionariasMock.txt', 'utf8');
            if (texto) {
                this.concesionarias=[];
                let registros = texto.split('\n');                
                for (let i = 0; i < registros.length; i++) {
                    let registro = registros[i].replace('\r','').split(',');
                    envioGratuito= (parseInt(registro[2]) == 1);
                    concesionaria = new Concesionaria(registro[0], registro[1], envioGratuito);
                    let vehiculos = registro[3].split('-');
                    for (let j = 0; j < vehiculos.length; j++) {
                        let vehiculo = this.vehiculoService.listarVehiculo(vehiculos[j]);
                        concesionaria.addVehiculo(vehiculo);                        
                    }
                    this.concesionarias.push(concesionaria);
                }
            }        
        } catch (error) {            
        }
    }
    private saveConcesionarias() {
        try {
            FS.writeFileSync('.\\datos\\concesionariasMock.txt', '');
            for (let i = 0; i < this.concesionarias.length; i++) {            
                let registro = this.concesionarias[i].guardar();
                FS.appendFileSync('.\\datos\\concesionariasMock.txt', `${i==0?'':'\n'}${registro}`);
            }
        } catch (error) {           
        }
    }
}
