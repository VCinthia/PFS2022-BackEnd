import Animal from './animal'
import interfaceParque from './interfaceParque';

export default class Pajaro extends Animal implements interfaceParque{
    
    private especiePajaro: string;
    private kmEnergia: number;
    private kmDistancia: number;
    

    public constructor(especiePajaro: string, kmEnergia : number, kmDistancia : number, especie : string, tamaño : number, peso : number, energia : number, eDormir?: number, horasDormir?: number, eComer?: number, pComer?: number ){
        super(especie, tamaño, peso, /* energia, eDormir, horasDormir, eComer, pComer */);
        this.especiePajaro = especiePajaro;
        
        this.energia = energia;


        //arreglar        
        if(kmEnergia == undefined)
            this.kmEnergia = 0;
            else
            this.kmEnergia = kmEnergia;

        if(kmDistancia == undefined)
            this.kmDistancia = 0;
            else
            this.kmDistancia = kmDistancia;
        
    }
    setZonaParque(zonaParque : string) : void {
        this.zonaParque = zonaParque;
    }
    getZonaParque(): string {
        return this.zonaParque;
    }
    getNombre(): string {
        throw new Error('Method not implemented.');
    }

    public getNombreEspecie() : string {return this.especiePajaro;}
    public setNombreEspecie(especiePajaro: string) : void {this.especiePajaro = especiePajaro;}

    //public getKmEnergia() : number {return this.kmEnergia;}
    public setKmEnergia(kmEnergia: number) : void {this.kmEnergia = kmEnergia;}

    //public getKmDistancia() : number {return this.kmDistancia;}
    public setKmDistancia(kmDistancia: number) : void {this.kmDistancia = kmDistancia;}

    //NO FUNCIONA
    //public volarDistancia(): void  {this.energia -= this.kmDistancia*this.kmEnergia;}

    getEnergia() : number {
        /* if(this.energia == undefined)
             return 0;
            else */
             return this.energia;
    }
    setEnergia(energia: number): void {
        throw new Error('Method not implemented.');
    }
    getEnergiaDormir(): number {
        throw new Error('Method not implemented.');
    }
    setEnergiaDormir(eDormir: number): void {
        throw new Error('Method not implemented.');
    }
    getHorasDormir(): number {
        throw new Error('Method not implemented.');
    }
    setHorasDormir(horasDormir: number): void {
        throw new Error('Method not implemented.');
    }
    getEnergiaComer(): number {
        throw new Error('Method not implemented.');
    }
    setEnergiaComer(eComer: number): void {
        throw new Error('Method not implemented.');
    }
    getPesoComer(): number {
        throw new Error('Method not implemented.');
    }
    setPesoComer(pComer: number): void {
        throw new Error('Method not implemented.');
    }
    dormir(): void {
        throw new Error('Method not implemented.');
    }
    comer(): void {
        throw new Error('Method not implemented.');
    }


    public imprimir() {
        console.log(`El animal ${this.getEspecie()} tiene las siguientes características {
             • especie especifica: ${this.especiePajaro}, 
             • tamaño: ${this.getTamaño()} cm., 
             • peso: ${this.getPeso()} gramos, 
             • energía inicial: ${this.getEnergia()} puntos, 
             • cuando duerme recupera: ${this.getEnergiaDormir()} puntos de energía, 
             • duerme: ${this.getHorasDormir()} horas, 
             • cuando come recupera: this.getEnergiaComer()} puntos de energía, 
             • cuando come gana: ${this.getPesoComer()} gramos de peso. `,
             /* • También realiza una distancia de ${this.getKmDistancia()} km y consume ${this.getKmEnergia()} de energía por cada Km recorrido. */
             `• Por lo tanto cuando duerme `,this.dormir(),`tiene una energía de: ${this.getEnergia()} puntos totales, y si luego come `, this.comer(),`tiene una energia de ${this.getEnergia()} puntos y peso de ${this.getPeso()} gramos. `);
             /* • Luego, cuando vuela `,this.volarDistancia(),` queda con ${this.getEnergia()} puntos de energia.`); */

        
        /* return `El Animal tiene las siguientes características { especie: ${this.especie}, tamaño: ${this.getTamaño()} cm., peso: ${this.getPeso()}, energía inicial: ${this.getEnergia()}, cuando duerme recupera: ${this.getEnergiaDormir()} puntos de energía, duerme: ${this.getHorasDormir()} horas, cuando come recupera: ${this.getEnergiaComer()} puntos de energía, cuando come gana: ${this.getPesoComer()} gramos de peso. Por lo tanto cuando duerme tiene una energía de: ${this.dormir()} puntos totales, y cuando come tiene una energia y peso de: ${this.comer()}, respectivamente. }`*/
    }
}

/* let golondrina : Pajaro = new Pajaro('Golondrina', 15, 16, 100, 1, 8, 2, 1, 'Hirundinidae',2,4);
golondrina.imprimir() */