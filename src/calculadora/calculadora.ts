export class CalculadoraService {    
    
    /* constructor(){
        this.calcular();
    } */
    public suma(a: number, b: number) : number { return a + b };
    public resta(a: number, b: number) : number { return a - b };

    public multiplicacion(a: number, b: number) : number { return a * b };
    public division(a: number, b: number) : number { return a / b };    

    public calculadora = [this.suma, this.resta, this.multiplicacion, this.division];  

    public calcular(metodo: string, a : number, b : number) {
        if(this.calculadora[metodo])
        this.calculadora[metodo](a , b);
        
        console.log(metodo);
    }
}