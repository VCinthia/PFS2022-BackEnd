import ArticuloLectura from "./articuloLectura";

//Libro
export default class Libro extends ArticuloLectura {
    //protected cantidadPaginas : number;
    /* private isbn : number;
    private autor : string;
    private editorial : string;
    private titulo : string;
    protected cantidadPaginas : number; */
    
    constructor(isbn : number, autor : string, editorial : string, titulo : string) {
        super(isbn, autor, editorial, titulo)
    }

    //getters&setters

    public setCantidadPaginas(cantidadPaginas:number): boolean {
        if (cantidadPaginas>0)
        this.cantidadPaginas = cantidadPaginas;
        return true;
    }
    
}

