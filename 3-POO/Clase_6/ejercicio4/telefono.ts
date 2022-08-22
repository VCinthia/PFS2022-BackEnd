export default class Telefono {
    private estaPrendido : boolean;
    private bateriaActual : number;
    private mensaje : string;
    private llamar : boolean

    //ver si el constructor va vacio
    public constructor(prendido : boolean, bateriaActual : number ){
        this.estaPrendido = prendido;
        this.bateriaActual = bateriaActual;
    }

    public getMensaje() : string {return this.mensaje;}
    //public setMensaje(mensaje: string) : void {this.mensaje = mensaje;}

    public getBateria() : number {return this.bateriaActual;}
    public setBateria(bateriaActual: number) : void {this.bateriaActual = bateriaActual;}


    public mandarMensaje(mensaje: string) : void {
        this.mensaje = mensaje;
        console.log(`el mensaje es ${this.getMensaje()}`);
        
    }

    public hacerLlamada(llamar: boolean): void {
        if (llamar==false) {
            this.llamar = false;
            console.log('No realizar llamada');
            
        } else {
            this.llamar = true; 
            console.log('Realizar llamada');}           
    }
    
    public prenderOApagar():void {
        if (this.estaPrendido) {
            this.estaPrendido = false;
            console.log('Telefono apagado');           
        } else {
            this.estaPrendido = true; }
            console.log('Telefono prendido');            
    }

}

let motorola : Telefono = new Telefono (false, 100);//ver que cuando paso por parametro true, me imprimir los dos mensajes de prenderOApagar

motorola.mandarMensaje('hola');
motorola.prenderOApagar();
motorola.hacerLlamada(false);
motorola.getBateria();//no me trae el valor de la bateria

