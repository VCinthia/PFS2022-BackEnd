import Concesionaria from "src/concesionaria/concesionaria";

export default class Red {
    private nombre : string;
    private url : string;
    private concesionarias : Concesionaria[] = [];
    
    constructor(nombre : string, url : string) {
        this.nombre=nombre;
        this.url=url;
    }
    
    public getNombre(): string { return this.nombre; }
    public setNombre(nombre: string): void { this.nombre = nombre; }
    
    public getUrl(): string { return this.url; }
    public setUrl(url: string): void { this.url = url; }
    
    public getConcesionarias(): Concesionaria[] { return this.concesionarias; }
    public addConcesionaria(concesionaria : Concesionaria) : string {
        try {
            if (concesionaria) {
                for (let i = 0; i < this.concesionarias.length; i++)
                    if (concesionaria.getSede() == this.concesionarias[i].getSede())
                        throw new Error('La concesionaria ya se encuentra.')
                this.concesionarias.push(concesionaria);
                return "ok";
            } else {
                throw new Error('No hay datos para agregar concesionaria.')
            } 
        } catch (error) {
            return error.message
        }
    }
    public delConcesionaria(concesionaria : Concesionaria) {
        try {
            if (concesionaria) {
                for (let i = 0; i < this.concesionarias.length; i++)
                    if (concesionaria.getSede() == this.concesionarias[i].getSede()) {
                        this.concesionarias.splice(i,1);
                        return "ok";
                    }
                throw new Error('La concesionaria no se encuentra.')
            } else {
                throw new Error('No hay datos para eliminar concesionaria.')
            } 
        } catch (error) {
            return error.message
        }
    }

    public guardar() : string {
        let concesionarias : string = '';
        for (let i = 0; i < this.concesionarias.length; i++) 
            concesionarias += `${i==0?'':'-'}${this.concesionarias[i].getSede()}`;
        return `${this.nombre},${this.url},${concesionarias}`;
    }
}