import { Injectable } from '@nestjs/common';
import * as FS from 'fs';
import Pista from './pista';

@Injectable()
export class PistaService {
    private listaPistas : Pista[] = [];

    constructor() {
        this.loadPistas();
    }

    public getPistas() : Pista[] {
        return this.listaPistas;
    }
    public getPista(identificador : number) : Pista {
        for (let i = 0; i < this.listaPistas.length; i++) {
            if (this.listaPistas[i].getIdentificador() == identificador) 
                return this.listaPistas[i];
        }
    }
    public addPista(pistaNueva: any) : string {
        let pista = new Pista(pistaNueva.identificador,pistaNueva.titulo,pistaNueva.duracion,pistaNueva.interprete);
        if (pista.getIdentificador() && pista.getTitulo() && pista.getDuracion() && pista.getInterprete()) {
            //agregar en estructura de memoria
            this.listaPistas.push(pista);
            this.savePistas();
            this.loadPistas();
            return "ok";
        }
        else
            return "parametros incorrectos";
    }
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    private loadPistas() {
        let pista : Pista;
        let texto : string = FS.readFileSync('.\\datos\\pistasMock.txt', 'utf8');
        if (texto) {
            this.listaPistas = [];
            let registros = texto.split('\n');
            for (let i = 0; i < registros.length; i++) {
                let registro = registros[i].split(',');
                pista = new Pista(parseInt(registro[0]), registro[1], parseInt(registro[2]), registro[3])
                this.listaPistas.push(pista);
            }
        }        
    }
    private savePistas() {
        FS.writeFileSync('.\\datos\\pistasMock.txt','');
        for (let i = 0; i < this.listaPistas.length; i++) {
            let pista = this.listaPistas[i];
            FS.appendFileSync('.\\datos\\pistasMock.txt',
                `${i==0?'':'\n'}${pista.getIdentificador()},${pista.getTitulo()},${pista.getDuracion()},${pista.getInterprete()}`
                             );
        }
    }
}
