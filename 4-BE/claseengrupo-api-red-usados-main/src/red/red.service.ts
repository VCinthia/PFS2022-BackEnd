import { Injectable } from '@nestjs/common';
import * as FS from 'fs';
import Red from './red';
import Concesionaria from 'src/concesionaria/concesionaria';
import { ConcesionariaService } from 'src/concesionaria/concesionaria.service';
import UsadosLugar from 'src/vehiculos/usadosLugar';
import { VehiculoService } from 'src/vehiculos/vehiculo.service';
import Vehiculo from 'src/vehiculos/vehiculo';


@Injectable()
export class RedService {
    private redes: Red[] = [];
    private concesionariaService: ConcesionariaService;
    private vehiculoService: VehiculoService;

    constructor() {
        this.concesionariaService = new ConcesionariaService();
        this.vehiculoService = new VehiculoService();
        this.loadRedes();
    }

    public listRedes(): Red[] {
        return this.redes;
    }
    public listRed(criterio: string): Red {
        for (let i = 0; i < this.redes.length; i++) {
            if (this.redes[i].getNombre() == criterio)
                return this.redes[i];
        }
        return null;
    }
    public addRed(datos: any): string {
        try {
            let red: Red;
            if (datos)
                if (datos.nombre && datos.url && datos.financiacion) {
                    for (let i = 0; i < this.redes.length; i++) {
                        if (this.redes[i].getNombre() == datos.nombre)
                            throw new Error('La red ya se encuentra.')
                    }
                    red = new Red(datos.nombre, datos.url, datos.financiacion);
                    if (datos.concesionarias) {
                        datos.concesionarias.forEach(dato => {
                            let concesionaria: Concesionaria = this.concesionariaService.listConcesionaria(dato.sede);
                            red.addConcesionaria(concesionaria);
                        });
                    }
                    this.redes.push(red);
                    this.saveRedes();
                    this.loadRedes();
                    return "ok";
                }
                else
                    throw new Error('Los datos para crear red no son validos');
            else
                throw new Error('No hay datos para crear red');
        } catch (error) {
            return error.message;
        }
    }
    public delRed(datos: any): string {
        try {
            if (datos)
                if (datos.nombre) {
                    for (let i = 0; i < this.redes.length; i++)
                        if (this.redes[i].getNombre() == datos.nombre) {
                            this.redes.splice(i, 1);
                            this.saveRedes();
                            this.loadRedes();
                            return "ok";
                        }
                    throw new Error('La red no se encuentra.')
                }
                else
                    throw new Error('Los datos para eliminar red no son validos');
            else
                throw new Error('No hay datos para eliminar red');
        } catch (error) {
            return error.message;
        }
    }
    public updRed(datos: any): string {
        try {
            let red: Red;
            if (datos)
                if (datos.nombre && datos.url && datos.financiacion) {
                    for (let i = 0; i < this.redes.length; i++)
                        if (this.redes[i].getNombre() == datos.nombre) {
                            red = new Red(datos.nombre, datos.url, datos.financiacion);
                            if (datos.concesionarias) {
                                datos.concesionarias.forEach(dato => {
                                    let concesionaria: Concesionaria = this.concesionariaService.listConcesionaria(dato.sede);
                                    red.addConcesionaria(concesionaria);
                                });
                            }
                            this.redes[i] = red;
                            this.saveRedes();
                            this.loadRedes();
                            return "ok";
                        }
                    throw new Error('La red no se encuentra.')
                }
                else
                    throw new Error('Los datos para modificar red no son validos');
            else
                throw new Error('No hay datos para modificar red');
        } catch (error) {
            return error.message;
        }
    }
    //
    public consultar(criterio: any): UsadosLugar[] {
        let vehiculo: Vehiculo;
        let concesionaria: Concesionaria;
        let red: Red;
        let usados: UsadosLugar[] = [];
        // AL INICIO TODOS LOS VEHICULOS DE LAS REDES CUMPLEN LOS CRITERIOS
        let universo: UsadosLugar[] = this.armarUniverso();
        // RECORRER CRITERIOS PARA ESTABLECER QUE VEHICULOS LOS CUMPLEN
        for (let i = 0; i < criterio.filtros.length; i++) {
            console.log(universo)
            for (let v = 0; v < universo.length; v++) {
                vehiculo = this.vehiculoService.listarVehiculo(universo[v].getDominio());
                concesionaria = this.concesionariaService.listConcesionaria(universo[v].getLugar());
                red = this.listRed(universo[v].getNombreRed())
                switch (criterio.filtros[i].clave) {
                    case 'tipo':
                        if (vehiculo.getTipo() == criterio.filtros[i].valor)
                            usados.push(universo[v]);
                        break;
                    case 'marca':
                        if (vehiculo.getMarca() == criterio.filtros[i].valor)
                            usados.push(universo[v]);
                        break;
                    case 'modelo':
                        if (vehiculo.getModelo() == criterio.filtros[i].valor)
                            usados.push(universo[v]);
                        break;
                    case 'año': {
                        let valor = criterio.filtros[i].valor;
                        if (valor.substring(0, 1) == '+' && vehiculo.getAño() >= parseInt(valor.substring(1)))
                            usados.push(universo[v]);
                        else if (valor.substring(0, 1) == '-' && vehiculo.getAño() <= parseInt(valor.substring(1)))
                            usados.push(universo[v]);
                        else if (vehiculo.getAño() == parseInt(valor))
                            usados.push(universo[v]);
                    }
                        break;
                    case 'precio': {
                        let valor = criterio.filtros[i].valor;
                        if (valor.substring(0, 1) == '+' && vehiculo.getPrecio() >= parseInt(valor.substring(1)))
                            usados.push(universo[v]);
                        else if (valor.substring(0, 1) == '-' && vehiculo.getPrecio() <= parseInt(valor.substring(1)))
                            usados.push(universo[v]);
                        else if (vehiculo.getPrecio() == parseInt(valor))
                            usados.push(universo[v]);
                    }
                        break;
                    case 'kilometros': {
                        let valor = criterio.filtros[i].valor;
                        if (valor.substring(0, 1) == '+' && vehiculo.getKilometraje() >= parseInt(valor.substring(1)))
                            usados.push(universo[v]);
                        else if (valor.substring(0, 1) == '-' && vehiculo.getKilometraje() <= parseInt(valor.substring(1)))
                            usados.push(universo[v]);
                        else if (vehiculo.getKilometraje() == parseInt(valor))
                            usados.push(universo[v]);
                        //else if (valor.substring(0, 1) == '-' && vehiculo.getKilometraje() <= parseInt(valor.substring(1)))
                        //   usados.push(universo[v]);

                    }
                        break;
                    case 'lugar':
                        if (universo[v].getLugar() == criterio.filtros[i].valor)
                            usados.push(universo[v]);
                        break;
                    case 'flete0':
                        let valor = criterio.filtros[i].valor;
                        if (concesionaria.isEnvioGratuito() == valor) {
                            usados.push(universo[v]);
                        }
                        break;
                    case 'cuotas': {
                        let valor = criterio.filtros[i].valor;
                        if (valor.substring(0, 1) == '+' && red.getFinanciancion() >= parseInt(valor.substring(1)))
                            usados.push(universo[v]);
                        else if (valor.substring(0, 1) == '-' && red.getFinanciancion() <= parseInt(valor.substring(1)))
                            usados.push(universo[v]);
                        else if (red.getFinanciancion() == parseInt(valor))
                            usados.push(universo[v]);

                    }


                }
            }
            // LUEGO DE CADA FILTRADO EL UNIVERSO SE REDEFINE COMO LOS ES LOS VEHICULOS QUE CUMPLIERON -> USADOS
            universo = [];
            usados.forEach(u => {
                universo.push(u);
            });
            usados = [];
        }
        return universo;
    }
    private armarUniverso(): UsadosLugar[] {
        let universo: UsadosLugar[] = [];
        this.redes.forEach(red => {
            red.getConcesionarias().forEach(concesionaria => {
                concesionaria.getVehiculos().forEach(vehiculo => {
                    universo.push(new UsadosLugar(vehiculo.getDominio(), concesionaria.getSede(), red.getNombre()));
                })
            });
        });
        return universo;
    }
    //
    private loadRedes() {
        try {
            let red: Red;
            let texto: string = FS.readFileSync('.\\datos\\redesMock.txt', 'utf8');
            if (texto) {
                this.redes = [];
                let registros = texto.split('\n');
                for (let i = 0; i < registros.length; i++) {
                    let registro = registros[i].replace('\r', '').split(',');
                    red = new Red(registro[0], registro[1], Number(registro[2]));
                    let concesionarias = registro[3].split('-');
                    for (let j = 0; j < concesionarias.length; j++) {
                        let concesionaria = this.concesionariaService.listConcesionaria(concesionarias[j]);
                        red.addConcesionaria(concesionaria);
                    }
                    this.redes.push(red);
                }
            }
        } catch (error) {
        }
    }
    private saveRedes() {
        try {
            FS.writeFileSync('.\\datos\\redesMock.txt', '');
            for (let i = 0; i < this.redes.length; i++) {
                let registro = this.redes[i].guardar();
                FS.appendFileSync('.\\datos\\redesMock.txt', `${i == 0 ? '' : '\n'}${registro}`);
            }
        } catch (error) {
        }
    }
}
