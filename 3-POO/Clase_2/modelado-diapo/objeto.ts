//MODELADO TELEVISOR:

class Televisor {
    //estado
     encendido : boolean;
     volumen : number;
     canal : number;

     constructor(volumen : number, canal : number) {
        this.volumen = volumen;
        this.canal = canal;
        }
    //funcionalidad
     encenderApagar() : void {
     if (this.encendido) {
     this.encendido = false;
     } else {
     this.encendido = true; }
     }
     subirVolumen() : void {
     this.volumen += 1;
     }
     bajarVolumen() : void {
     this.volumen -= 1;
     }
     subirCanal() : void {
     this.canal += 1;
     }
     bajarCanal() : void {
     this.canal -= 1;
     }
     elegirCanal(canal : number) : void {
     this.canal = canal;
     }
}

//EXTENDEMOS DE LA CLASE TELEVISOR:

let volumenInicial: number = 10;
let canalInicial: number = 24;

let primerTelevisor = new Televisor(volumenInicial, canalInicial);//en caso de que la clase no tenga contructor se creara sin parametros
let segundoTelevisor = new Televisor(volumenInicial, canalInicial);
let tercerTelevisor = new Televisor(volumenInicial, canalInicial);

primerTelevisor.encenderApagar();
primerTelevisor.subirCanal();

segundoTelevisor.encenderApagar();
segundoTelevisor.bajarCanal();
segundoTelevisor.bajarVolumen();

tercerTelevisor.encenderApagar();
tercerTelevisor.subirVolumen();