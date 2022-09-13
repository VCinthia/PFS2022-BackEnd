export default abstract class ArticuloLectura{
    private isbn : number;
    private autor : string;
    private editorial : string;
    private titulo : string;
    protected cantidadPaginas : number;

    constructor(isbn : number, autor : string, editorial : string, titulo : string){
        this.isbn = isbn;
        this.autor = autor;
        this.editorial = editorial;
        this.titulo = titulo;
    }

    //getters&setters
    public getIsbn() : number { return this.isbn;}
    public setIsbn(isbn : number) : void { this.isbn = isbn;}

    public getAutor() : string { return this.autor;}
    public setAutor(autor : string) : void { this.autor = autor;}

    public getEditorial() : string { return this.editorial;}
    public setEditorial(editorial : string) : void { this.editorial = editorial;}

    public getTitulo() : string { return this.titulo;}
    public setTitulo(titulo : string) : void { this.titulo = titulo;}

    public getCantPaginas() : number { return this.cantidadPaginas;}
    
    abstract setCantidadPaginas(cantidadPaginas : number): boolean;
} 

//una biblioteca tiene articulos de lectura
//una revista o un libro extienden de articuloLectura