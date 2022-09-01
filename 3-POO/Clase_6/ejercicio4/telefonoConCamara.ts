import Telefono from "./telefono";
//import * as rls from 'readline-sync';

export default class TelefonoConCamara extends Telefono{
    //private galeriaFoto : [];
    private foto : boolean;

    public constructor(estaPrendido: boolean, bateriaActual:number){
        super(estaPrendido, bateriaActual);
    }

     public sacarFoto(foto: boolean): void {
        if (foto==false) {
            this.foto = false;
            console.log('No tomar foto');
            
        } else {
            this.foto = true;
            //usar readlinesync para ingresar nombre foto 
            if (foto) 
            //this.galeriaFoto.push(foto);
            console.log('Foto tomada');}           
    } 
}

