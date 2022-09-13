import ArticuloLectura from "./articuloLectura";

export default class Biblioteca{
    private nombre : string;
    private domicilio : string;
    private elementos : ArticuloLectura[];

    constructor(nombre : string, domicilio : string){
        this.nombre = nombre;
        this.domicilio = domicilio;
    }

    //agregar metodos getters&setters
    
    //CRUD

    //El método insertar debe recibir Articulo de Lectura (Libro o Revista) y agregarlo a la lista de elementos, retornará true en caso de haberlo guardado exitosamente y false en otro caso, como por ejemplo que el Articulo de Lectura ya se encuentre en la lista. 
    public insertar(elemento : ArticuloLectura) : boolean {
        if (elemento){
            this.elementos.push(elemento);
            console.log('El elemento se guardo correctamente en Articulos de Lectura');
            }
        return true;            
    }

    //El método buscar, recibira el numero de ISBN del elemento y deberá retornar el elemento de lectura correspondiente, en caso de no existir, manejar el error como crea adecuado.
    public buscar(isbn : ArticuloLectura) : boolean {
        for (let i = 0; i < this.elementos.length; i++) {
            if (this.elementos[i] == isbn)              
            console.log("El puesto buscado es :", this.elementos[i]);
            return true
        }
        console.log("El puesto no fue encontrado");
        return false;
    }

    //El método modificarPaginas, recibe el ID del artículo y la cantidad de paginas e intenta modificar la cantidad de paginas, retornando true en caso de éxito y false en otro caso.
    public modificarPagina(isbn : ArticuloLectura, cantidadPaginas : number) : boolean {
        for (let i = 0; i < this.elementos.length; i++) {
            if (this.elementos[i] == isbn)              
            if(cantidadPaginas)
            this.elementos.length = cantidadPaginas;
            return true;
        }
        return false;
        
    }

    //El método eliminar recibe un identificador de artículo y debe retornar true en caso de haberlo borrado exitosamente y false en caso contrario.
    public eliminar(isbn : number) : boolean {
        if (this.elementos[isbn])
        this.elementos.splice(isbn);
        return true;
    }

    //El método buscarPorAutor, recibirá un string con el nombre del autor y retorna un arreglo con todos los artículos de lectura que correspondan.
    public buscarPorAutor(autor : string) : ArticuloLectura[] {
        let elementos : ArticuloLectura[] = [];
        this.elementos.forEach(elemento => {
            if(elemento.getAutor() == autor)
                elementos.push(elemento)
        });
        return elementos;
    }

}