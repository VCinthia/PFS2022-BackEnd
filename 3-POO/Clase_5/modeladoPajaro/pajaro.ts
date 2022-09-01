import Animal from './animal'

export default class Pajaro extends Animal{
    private especiePajaro: string;
    private kmEnergia: number;
    private kmDistancia : number;

    public constructor(especie : string, tamaño : number, peso : number, energia : number, eDormir : number, horasDormir : number, eComer : number, pComer : number, especiePajaro: string, kmEnergia : number, kmDistancia : number){
        super(especie, tamaño, peso, energia, eDormir, horasDormir, eComer, pComer);
        this.especiePajaro = especiePajaro;
        this.kmEnergia = kmEnergia;
        this.kmDistancia = kmDistancia;
        
    }

    public getNombreEspecie() : string {return this.especiePajaro;}
    public setNombreEspecie(especiePajaro: string) : void {this.especiePajaro = especiePajaro;}

    public getKmEnergia() : number {return this.kmEnergia;}
    public setKmEnergia(kmEnergia: number) : void {this.kmEnergia = kmEnergia;}

    public getKmDistancia() : number {return this.kmDistancia;}
    public setKmDistancia(kmDistancia: number) : void {this.kmDistancia = kmDistancia;}

    public volarDistancia(): void  {this.energia -= this.kmDistancia*this.kmEnergia;}


    public imprimir() {
        console.log(`El animal ${this.getEspecie()} tiene las siguientes características {
             • especie especifica: ${this.especiePajaro}, 
             • tamaño: ${this.getTamaño()} cm., 
             • peso: ${this.getPeso()} gramos, 
             • energía inicial: ${this.getEnergia()} puntos, 
             • cuando duerme recupera: ${this.getEnergiaDormir()} puntos de energía, 
             • duerme: ${this.getHorasDormir()} horas, 
             • cuando come recupera: ${this.getEnergiaComer()} puntos de energía, 
             • cuando come gana: ${this.getPesoComer()} gramos de peso. 
             • También realiza una distancia de ${this.getKmDistancia()} km y consume ${this.getKmEnergia()} de energía por cada Km recorrido.
             • Por lo tanto cuando duerme `,this.dormir(),`tiene una energía de: ${this.getEnergia()} puntos totales, y si luego come `, this.comer(),`tiene una energia de ${this.getEnergia()} puntos y peso de ${this.getPeso()} gramos. 
             • Luego, cuando vuela `,this.volarDistancia(),` queda con ${this.getEnergia()} puntos de energia.`);

        
        /* return `El Animal tiene las siguientes características { especie: ${this.especie}, tamaño: ${this.getTamaño()} cm., peso: ${this.getPeso()}, energía inicial: ${this.getEnergia()}, cuando duerme recupera: ${this.getEnergiaDormir()} puntos de energía, duerme: ${this.getHorasDormir()} horas, cuando come recupera: ${this.getEnergiaComer()} puntos de energía, cuando come gana: ${this.getPesoComer()} gramos de peso. Por lo tanto cuando duerme tiene una energía de: ${this.dormir()} puntos totales, y cuando come tiene una energia y peso de: ${this.comer()}, respectivamente. }`*/
    }
}

/* let golondrina : Pajaro = new Pajaro('Golondrina', 15, 16, 100, 1, 8, 2, 1, 'Hirundinidae',2,4);
golondrina.imprimir() */