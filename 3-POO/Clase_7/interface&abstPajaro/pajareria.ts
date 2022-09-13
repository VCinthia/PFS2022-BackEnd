import Pajaro from "./pajaro";

export default class Pajareria{
    private nombre : string;
    private pajaros : Pajaro[];//array de pajaros que contiene la pajarera

    constructor (nombre : string,) {        
        this.nombre = nombre;
        this.pajaros = [];
    }

    public getNombre() : string { return this.nombre; }
    public setNombre(nombre : string) : void { this.nombre = nombre; }

    //CRUD
    public createPajaros(pajaro : Pajaro) : void {
        if (pajaro)
            this.pajaros.push(pajaro);
    }


    public findPajaros(pajaro : Pajaro) : boolean {
        for (let i = 0; i < this.pajaros.length; i++) { 
            if (this.pajaros[i] == pajaro) 
                console.log("El puesto buscado es correcto", this.pajaros[i]);   
                return true; 
        }
        console.log("El puesto buscado es no existe");
        return false;        
    }

    
    public updatePajaros(pajaro : Pajaro, posicion : number) : void {
        if(pajaro)
        this.pajaros[posicion] = pajaro;
    }
    public deletePajaros(posicion : number) : void {
        if (this.pajaros[posicion])
        this.pajaros.splice(posicion);
    }
    public readPajaros() : Pajaro[]{
        let pajaros : Pajaro [] = [];
        this.pajaros.forEach(pajaro =>{
            pajaros.push(pajaro)
        });
        return pajaros;
    }
    public readPajarosTxt() : string {
        let textoPajaros : string = '';
        this.pajaros.forEach(pajaro => {
            textoPajaros += pajaro.imprimir() + '\n';//?
        });
        return textoPajaros;
    }
    public findPajarosXEspecie(especiePajaro : string) : Pajaro[] {
        let pajaros : Pajaro[] = [];
        this.pajaros.forEach(pajaro => {
            if(pajaro.getNombreEspecie() == especiePajaro)
                pajaros.push(pajaro)
        });
        return pajaros;
    }
}