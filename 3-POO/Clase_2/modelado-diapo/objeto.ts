//MODELADO TELEVISOR:

class Televisor {
    //estado
    private encendido : boolean;
    private volumen : number;
    private canal : number;
    private modelo? : string;

    public constructor(volumenInicial : number, canalInicial : number, modelo?: string) {
        this.volumen = volumenInicial;
        this.canal = canalInicial;
        //constructor con parametros opcionales -> modelo?: string
        if(modelo == undefined)
            this.modelo = ' ';
            else
            this.modelo = modelo;
        }
    //funcionalidad
    public encenderApagar() : void {
        if (this.encendido) {
            this.encendido = false;
        } else {
            this.encendido = true; }
    }
    public subirVolumen() : void {
        this.volumen += 1;
    }
    public bajarVolumen() : void {
        this.volumen -= 1;
    }
    public subirCanal() : void {
        this.canal += 1;
    }
    public bajarCanal() : void {
        this.canal -= 1;
    }
    public elegirCanal(canal : number) : void {
        this.canal = canal;
    }
    public elegirModelo(modelo: string){
        this.modelo = modelo;
    }
}

//EXTENDEMOS DE LA CLASE TELEVISOR:

let volumenInicial: number = 10;
let canalInicial: number = 24;
let modelo: string = "Sony";

let primerTelevisor = new Televisor(volumenInicial, canalInicial, modelo);//en caso de que la clase no tenga contructor se creara sin parametros
let segundoTelevisor = new Televisor(volumenInicial, canalInicial);
let tercerTelevisor = new Televisor(volumenInicial, canalInicial);

primerTelevisor.encenderApagar();
primerTelevisor.subirCanal();

segundoTelevisor.encenderApagar();
segundoTelevisor.bajarCanal();
segundoTelevisor.bajarVolumen();

tercerTelevisor.encenderApagar();
tercerTelevisor.subirVolumen();

//CLASES EMPLEADAS COMO TIPOS:

let Televisores : Televisor[]=[primerTelevisor, segundoTelevisor, tercerTelevisor];

//COMPOSICION DE CLASES:

class TelevisorComposicion {
    //estado
    private encendido : boolean;
    private deco : Decodificador;
    //funcionalidad
    constructor(deco : Decodificador) {
        this.deco = deco;
    }
    public encenderApagar() : void {
        if (this.encendido) {
        this.encendido = false;
    } else {
        this.encendido = true;
    }}
    public subirVolumen() : void { this.deco.subirVolumen(); }
    public bajarVolumen() : void { this.deco.bajarVolumen(); }
    public subirCanal() : void { this.deco.subirCanal(); }
    public bajarCanal() : void { this.deco.bajarCanal(); }
    public elegirCanal(canal : number) : void { this.deco.elegirCanal(canal); }
    public estaEncendido() : boolean { return this.encendido; }
    public verCanal() : number { return this.deco.verCanal(); }
    public verVolumen() : number { return this.deco.verVolumen(); }
}

class Decodificador {
    //estado
    private volumen : number;
    private canal : number; 
    //funcionalidad
    public subirVolumen() : void { this.volumen += 1; }
    public bajarVolumen() : void { this.volumen -= 1; }
    public subirCanal() : void { this.canal += 1; }
    public bajarCanal() : void { this.canal -= 1; }
    public elegirCanal(canal : number) : void { this.canal = canal; }
    public verCanal() : number { return this.canal }
    public verVolumen() : number { return this.volumen }
}

let decodificador: Decodificador = new Decodificador();
let primerTelevisorComposicion: TelevisorComposicion = new TelevisorComposicion(decodificador);
primerTelevisorComposicion.elegirCanal(15);    