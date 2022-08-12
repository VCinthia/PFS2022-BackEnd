class Pajaro{
    //estado
    private kmEnergia: number;
    private kmDistancia : number;
        
    private animal : Animal;

    //funcionalidad
    //Extiendo de clase Animal
    public constructor (animal : Animal){this.animal = animal;}
    
    /*getters*/
    //verPeso muestra el peso actual
    public verPeso():number {return this.animal.verPeso();}
    //verEnergia muestra el estado actual de energia
    public verEnergia():number{return this.animal.verEnergia();}

    public verTamaño() : number { return this.animal.verTamaño();}
    public verHorasDormir():number{return this.animal.verHorasDormir();}
    public verEnergiaComer():number{return this.animal.verEnergiaComer()}
    public verPesoComer():number{return this.animal.verPesoComer();}
    

    /*setters*/
    //defPeso define energia inicial
    public defPeso(peso:number) : void {this.animal.defPeso(peso);}    
    //defEnergia define energia inicial
    public defEnergia(energia:number) : void {this.animal.defEnergia(energia);}
    //defTamaño define tamaño
    public defTamaño(tamaño:number) : void {this.animal.defTamaño(tamaño);}
    //defEnergiaDomir define que porcentaje va a reducir
    public defEnergiaDormir(eDormir:number): void {this.animal.defEnergiaDormir(eDormir);}    
    //defHorasDormir define cuantas horas va dormir
    public defHorasDormir(horasDormir:number):void{this.animal.defHorasDormir(horasDormir);}
    //defEnergiaComer define cuantas horas va dormir
    public defEnergiaComer(eComer:number):void{this.animal.defEnergiaComer(eComer);}
    //defPesoComer define el peso que gana comiendo
    public defPesoComer(pComer:number):void{this.animal.defPesoComer(pComer);}
    //kmDistancia define cantidad de kilometros que recorre
    public defKmDistancia(kmDistancia : number) : void {this.kmDistancia=kmDistancia;}
    //kmEnergia debe definir que energia resta ejemplo: '1'
    public defkmEnergia(kmEnergia : number) : void {this.kmDistancia=kmEnergia;}

    //dormir define cuanta energia queda despues de dormir
    public dormir() : void {return this.animal.dormir();}
    //comer define cuanta energia queda despues de comer
    public comer() : void {return this.animal.comer();}
    //volarDistancia tiene que restar energia-- NO FUNCIONA PORQUE NO PUEDE ACCEDER DESDE PAJARO A ENERGIA DE ANIMAL? HACER EXTENDER DE LA CLASE
    //public volarDistancia() : void {this.defEnergia(energia : number) -= this.kmDistancia*this.kmEnergia;}
}

class Animal {
    //estado
    private tamaño : number;
    private peso : number;
    private energia : number;
    private eDormir : number;
    private horasDormir : number;
    private eComer : number;
    private pComer : number;

    //funcionalidad
    /*getters*/
    public verTamaño() : number { return this.tamaño}
    public verPeso() : number {return this.peso}
    public verEnergia():number{return this.energia}
    public verHorasDormir():number{return this.horasDormir}
    public verEnergiaComer():number{return this.eComer}
    public verPesoComer():number{return this.pComer}
    public verEnergiaDormir():number{return this.eDormir}    

    /*setters*/
    public defTamaño(tamaño : number) : void {this.tamaño = tamaño}
    public defPeso(peso : number) : void {this.peso = peso}
    public defEnergia(energia : number) : void {this.energia=energia}    
    public defEnergiaDormir(eDormir:number): void {this.eDormir=eDormir}//valor de energia que suma ejemplo: 2      
    public defHorasDormir(horasDormir:number):void{this.horasDormir=horasDormir}
    public defEnergiaComer(eComer:number) : void {this.eComer=eComer}
    public defPesoComer(pComer:number) : void {this.pComer=pComer}

    public dormir() : void {this.energia += this.horasDormir*this.eDormir;}
    public comer() : void { this.energia += this.eComer; this.peso+=this.pComer;}    
}

let animal:Animal = new Animal;
let golondrina : Pajaro = new Pajaro(animal);
golondrina.defEnergia(100);
console.log(`El pajaro inicia con ${golondrina.verEnergia()} de energia`);
golondrina.defPeso(2);
golondrina.defTamaño(40);
golondrina.defEnergiaDormir(1);
golondrina.defHorasDormir(8);
golondrina.defEnergiaComer(4);
golondrina.defPesoComer(1);

console.log(`El pajaro inicia con un peso de ${golondrina.verPeso()} kg`);

golondrina.comer();
console.log(`El pajaro despues de comer tiene ${golondrina.verEnergia()} de energia y pesa ${golondrina.verPeso()} kg`);

golondrina.dormir();
console.log(`El pajaro despues de dormir ${golondrina.verHorasDormir()} hrs. aumenta su energia en ${golondrina.verEnergia()}`);

golondrina.volarDistancia();