export default abstract class Animal {
    //estado
    private especie : string;
    private tamaño : number;
    private peso : number;
    protected energia : number = 0;// protected para que pueda acceder en volarDistancia() a this.energia
    private eDormir : number;
    private horasDormir : number;
    private eComer : number;
    private pComer : number;

    protected zonaParque : string;

    constructor(especie : string, tamaño : number, peso : number, energia? : number, eDormir? : number, horasDormir ?: number, eComer ?: number, pComer ?: number){
        this.especie = especie;
        this.tamaño = tamaño;
        this.peso = peso;
        //constructor con parametros opcionales -> algo?: string
        
        if(energia !== undefined){
            
            this.energia = energia;}
        
        if(eDormir == undefined)
            this.eDormir = 0;
            else
            this.eDormir = eDormir;
            
        if(horasDormir == undefined)
            this.horasDormir = 0;
            else
            this.horasDormir = horasDormir;        
        
        if(eComer == undefined)
            this.eComer = 0;
            else
            this.eComer = eComer;

        if(pComer == undefined)
            this.pComer = 0;
            else
            this.pComer = pComer;
    }

    public getEspecie() : string {return this.especie;}
    public setEspecie(especie: string) : void {this.especie = especie;}

    public getTamaño() : number {return this.tamaño;}
    public setTamaño(tamaño: number) : void {this.tamaño = tamaño;}

    public getPeso() : number {return this.peso;}
    public setPeso(peso : number) : void {this.peso = peso;}

    abstract  getEnergia()  : number /*{return this.energia;} */
    abstract  setEnergia(energia : number) : void /* {this.energia = energia;} */

    abstract  getEnergiaDormir() : number /* {return this.eDormir;} */
    abstract  setEnergiaDormir(eDormir:number) : void /* {this.eDormir=eDormir;}//valor de energia que suma ejemplo: 2 */

    abstract  getHorasDormir():number /* {return this.horasDormir;} */
    abstract  setHorasDormir(horasDormir:number) : void /* {this.horasDormir = horasDormir;} */

    abstract  getEnergiaComer() : number /* {return this.eComer;} */
    abstract  setEnergiaComer(eComer:number) : void /* {this.eComer=eComer;} */

    abstract  getPesoComer() : number /* {return this.pComer;} */
    abstract  setPesoComer(pComer:number) : void /* {this.pComer=pComer;} */

    //funciona
    abstract  dormir() : void /* {this.energia += this.horasDormir * this.eDormir;} */
    abstract  comer() : void /* {this.energia += this.eComer; this.peso += this.pComer;} */

    public imprimir() {
        console.log(`El Animal tiene las siguientes características { 
            • especie: ${this.especie}, 
            • tamaño: ${this.getTamaño()} cm., 
            • peso: ${this.getPeso()} gramos, 
            • energía inicial: ${this.getEnergia()} puntos, 
            • cuando duerme recupera: ${this.getEnergiaDormir()} puntos de energía, 
            • duerme: ${this.getHorasDormir()} horas, 
            • cuando come recupera: ${this.getEnergiaComer()} puntos de energía, 
            • cuando come gana: ${this.getPesoComer()} gramos de peso. 
            • Por lo tanto cuando duerme `,this.dormir(),`tiene una energía de ${this.getEnergia()} puntos totales, y si luego come `, this.comer(),`tiene una energia  de ${this.getEnergia()} puntos y peso de: ${this.getPeso()} gramos`);
    }
}

/* let gato : Animal = new Animal ('gato',40, 5000, 100, 2, 10, 1, 100);
gato.imprimir();

gato.comer();
console.log(`Luego de comer la energia es de ${gato.getEnergia()} puntos y pesa ${gato.getPeso()} gramos`);

gato.dormir();
console.log(`Luego de dormir la energia es de ${gato.getEnergia()} puntos`);  */

