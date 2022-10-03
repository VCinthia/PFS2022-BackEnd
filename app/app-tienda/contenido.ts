export class Contenido {
    private tipo: string;
    private nombre: string;
    private fechaPublicacion: string;
    private descripcion: string;
    private img: string;

    constructor(tipo:string, nombre:string, fechaPublicacion:string, descripcion:string, img:string){
        this.tipo = tipo;
        this.nombre = nombre;
        this.fechaPublicacion = fechaPublicacion;
        this.descripcion = descripcion;
        this.img = img;
    }

    public setTipo(tipo:string) : void{ this.tipo = tipo; }
    public getTipo() : string{ return this.tipo; }

    public setNombre(nombre:string) : void{ this.nombre = nombre; }
    public getNombre() : string{ return this.nombre; }

    public setFecha(fechaPublicacion:string) : void { this.fechaPublicacion = fechaPublicacion; }
    public getFecha() : string{ return this.fechaPublicacion; }

    public setDescripcion(descripcion:string) : void { this.descripcion = descripcion; }
    public getDescripcion() : string { return this.descripcion; }

    public setImg(img : string) : void { this.img = img; }
    public getImg() : string { return this.img; }

    public imprimir() {
        return `El contenido es: { tipo: ${this.tipo}, nombre: ${this.nombre}, fecha de lanzamiento: ${this.fechaPublicacion}, descripción: ${this.descripcion} y su imagen esta cargada en el siguiente enlace: ${this.img}}`
    }

}