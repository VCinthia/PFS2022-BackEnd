import ArticuloLectura from "./articuloLectura";

//Revista
export default class Revista extends ArticuloLectura {
    private articulos: string []
    //protected cantidadPaginas : number;
    
    constructor(isbn : number, autor : string, editorial : string, titulo : string) {
        super(isbn, autor, editorial, titulo)
    }
    
    //getters&setters

    public agregarArticulo(articulo : string) : void {
        if (articulo)
            this.articulos.push(articulo);
    }

    public setCantidadPaginas(cantidadPaginas:number): boolean {
        if (cantidadPaginas<0 && cantidadPaginas>50)
            throw new Error('Las revistas no pueden contener mas de 50 páginas')
        else {
            this.cantidadPaginas = cantidadPaginas;
            return true;
        }
        /* try {
            if (this.cantidadPaginas>0 && this.cantidadPaginas<50)
        this.cantidadPaginas = cantidadPaginas;
        return true;
        } catch() */        
    }
}