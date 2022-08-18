export default class Helado {
    private sabor : string;
    private tipo : string;
    private precio : number;
    private color : string;

    constructor(sabor : string, tipo : string, precio : number, color : string) {
        this.sabor=sabor;
        this.tipo=tipo;
        this.precio=precio;
        this.color=color;
    }
    public getSabor(): string {
        return this.sabor;
    }
    public setSabor(sabor: string): void {
        this.sabor = sabor;
    }
    public getTipo(): string {
        return this.tipo;
    }
    public setTipo(tipo: string): void {
        this.tipo = tipo;
    }
    public getPrecio(): number {
        return this.precio;
    }
    public setPrecio(precio: number): void {
        this.precio = precio;
    }
    public getColor(): string {
        return this.color;
    }
    public setColor(color: string): void {
        this.color = color;
    }
    public imprimir() : string {
        return `Helado { sabor:${this.getSabor()}, tipo:${this.getTipo()}, precio:${this.getPrecio()}, color:${this.getColor()}  }`
    }
}