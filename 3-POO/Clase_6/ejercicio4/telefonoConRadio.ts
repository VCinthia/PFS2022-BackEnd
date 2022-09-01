import Telefono from "./telefono";

export default class TelefonoConRadio extends Telefono{
    private frecuenciaActual : number;
    
    public constructor(estaPrendido: boolean, bateriaActual:number){
        super(estaPrendido, bateriaActual);
    }

    public verFrecuencia(): number{        
        return this.frecuenciaActual       
    }
    public setFrecuencia(valor : number) : void {
        this.frecuenciaActual = valor;
    }
}

let nokia : TelefonoConRadio = new TelefonoConRadio(true,100);
nokia.setFrecuencia(88);
nokia.verFrecuencia();
console.log(`La frecuencia del nokia es ${nokia.verFrecuencia()}`);