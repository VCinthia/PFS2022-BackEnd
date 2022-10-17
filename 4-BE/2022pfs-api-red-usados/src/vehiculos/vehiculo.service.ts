import { Injectable } from '@nestjs/common';
import * as FS from 'fs';
import Auto from './Auto';
import Camioneta from './Camioneta';
import Vehiculo from './vehiculo';

@Injectable()
export class VehiculoService {
    private vehiculos : Vehiculo[] = [];

    constructor() {
        this.loadVehiculos();
    }
    public listarTodos() : Vehiculo[] {
        return this.vehiculos;
    }
    public listarVehiculo(dominio : string) : Vehiculo {
        for (let i = 0; i < this.vehiculos.length; i++) {
            if (this.vehiculos[i].getDominio() == dominio)
                return this.vehiculos[i];
        }
        return null;
    }
    public listarAutos() : Vehiculo[] {
        let autos : Vehiculo[] = [];
        for (let i = 0; i < this.vehiculos.length; i++) {
            if (this.vehiculos[i].getTipo() == 'Auto')
                autos.push(this.vehiculos[i]);
        }
        return autos;
    }
    public listarCamionetas() : Vehiculo[] {
        let camionetas : Vehiculo[] = [];
        for (let i = 0; i < this.vehiculos.length; i++) {
            if (this.vehiculos[i].getTipo() == 'Camioneta')
                camionetas.push(this.vehiculos[i]);
        }
        return camionetas;
    }
    public listarVehiculosTipo(tipo : string) : Vehiculo[] {
        let vehiculos : Vehiculo[] = [];
        for (let i = 0; i < this.vehiculos.length; i++) {
            if (this.vehiculos[i].getTipo() == tipo || tipo.trim() == 'todos')
            vehiculos.push(this.vehiculos[i]);
        }
        return vehiculos;
    }
    public agregarVehiculos(datos : any) : string {
        try {
            let vehiculo : Vehiculo;
            let cantidad = datos.cantidad;
            for (let i = 0; i < cantidad; i++) {
                let elemento = datos.vehiculos[i];
                if (elemento.tipo == 'Auto')
                    vehiculo = new Auto(elemento.dominio, elemento.precio, elemento.marca, elemento.modelo, elemento.año, elemento.km);
                else if (elemento.tipo == 'Camioneta')
                        vehiculo = new Camioneta(elemento.dominio, elemento.precio, elemento.marca, elemento.modelo, elemento.año, elemento.km, elemento.capacidad);
                else
                    throw new Error('Tipo de vehiculo no valido');
                this.vehiculos.push(vehiculo)                
            }
            this.saveVehiculos();
            this.loadVehiculos();
            return 'ok';
        } catch (error) {
            return error.message
        }
    }
    public eliminarVehiculo(dominio : string) : string {
        try {
            for (let i = 0; i < this.vehiculos.length; i++) {
                if (this.vehiculos[i].getDominio() == dominio) {
                    this.vehiculos.splice(i,1);
                    this.saveVehiculos();
                    this.loadVehiculos();
                    return 'ok';        
                }                
            }
            return 'No se encuentra el dominio';
        } catch (error) {
            return error.message;
        }
    }
    public modificarVehiculos(dominio : string, datos : any) : string {
        try {
            for (let i = 0; i < this.vehiculos.length; i++) {
                if (this.vehiculos[i].getDominio() == dominio) {
                    // ARMAR NUEVO VEHICULO
                    let vehiculo : Vehiculo;
                    let cantidad = datos.cantidad;
                    for (let j = 0; j < cantidad; j++) {
                        let elemento = datos.vehiculos[j];
                        if (elemento.tipo == 'Auto')
                            vehiculo = new Auto(elemento.dominio, elemento.precio, elemento.marca, elemento.modelo, elemento.año, elemento.km);
                        else if (elemento.tipo == 'Camioneta')
                                vehiculo = new Camioneta(elemento.dominio, elemento.precio, elemento.marca, elemento.modelo, elemento.año, elemento.km, elemento.capacidad);
                        else
                            throw new Error('Tipo de vehiculo no valido');
                    }
                    // REEMPLAZAR VIEJO POR NUEVO EN ARREGLO DE MEMORIA
                    this.vehiculos[i] = vehiculo;
                    this.saveVehiculos();
                    this.loadVehiculos();
                    return 'ok';        
                }                
            }
            return 'No se encuentra el dominio';
        } catch (error) {
            return error.message;
        }
    }
    ///
    private loadVehiculos() {
        let vehiculo : Vehiculo;
        let texto : string = FS.readFileSync('.\\datos\\vehiculosMock.txt', 'utf8');
        if (texto) {
            this.vehiculos = [];
            let registros = texto.split('\n');
            for (let i = 0; i < registros.length; i++) {
                let registro = registros[i].split(',');
                if (registro.length == 6)
                    vehiculo = new Auto(registro[0], parseInt(registro[1]), registro[2], registro[3], parseInt(registro[4]), parseInt(registro[5]));
                else
                    vehiculo = new Camioneta(registro[0], parseInt(registro[1]), registro[2], registro[3], parseInt(registro[4]), parseInt(registro[5]), parseInt(registro[6]));
                this.vehiculos.push(vehiculo);
            }
        }        
    }
    private saveVehiculos() {
        FS.writeFileSync('.\\datos\\vehiculosMock.txt', '');
        for (let i = 0; i < this.vehiculos.length; i++) {            
            let registro = this.vehiculos[i].guardar();
            FS.appendFileSync('.\\datos\\vehiculosMock.txt', `${i==0?'':'\n'}${registro}`);
        }
    }
}
