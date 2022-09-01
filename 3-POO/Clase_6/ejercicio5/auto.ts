import Color from "./color";

export default class Vehículo {
    private patente : string;
    private titular : string;
    private marca : string;
    private modelo : string;
    private año : number;
    private color : Color;

    public constructor (patente:string, titular:string, marca:string, modelo:string, año:number, color:Color){
        
        this.patente = patente;
        this.titular = titular;
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
        this.color = color;
    }

    public getPatente() : string {return this.patente;}
    public setPatente(patente: string) : void {this.patente = patente;}

    public getTitular() : string {return this.titular;}
    public setTitular(titular: string) : void {this.titular = titular;}

    public getMarca() : string {return this.marca;}
    public setMarca(marca: string) : void {this.marca = marca;}

    public getModelo() : string {return this.modelo;}
    public setModelo(modelo: string) : void {this.modelo = modelo;}

    public getAño() : number {return this.año;}
    public setAño(año: number) : void {this.año = año;}

    public getColor() {return this.color}
    public setColor(Color: any) : void {this.color = Color;} 

    public imprimir(){
        console.log(`El vehiculo instanciado posee la sig. descripción: {
            ${this.patente}, ${this.titular}, ${this.marca}, ${this.modelo}, ${this.año}, ${(this.color)}`);
    }

}

let colorPrueba : Color = new Color (25,36,42);

let autoPrueba : Vehículo = new Vehículo ('AAA111','NombreRandom','Ford','Fiesta', 2014, colorPrueba);

autoPrueba.imprimir();





