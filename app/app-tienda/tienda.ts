import { Contenido } from "./contenido";

export default class Tienda{
    private nombre : string;
    
    //private videoJuegos : VideoJuego []; //array de videojuegos de la clase Videojuego
    //private aplicaciones : Aplicacion []; //array de aplicaciones de la clase Aplicacion

    private videoJuegos : Contenido []; //array de videojuegos de la clase Contenido
    private aplicaciones : Contenido []; //array de aplicaciones de la clase Contenido

    constructor (nombre : string) {
        this.nombre = nombre;
        this.videoJuegos = [];
        this.aplicaciones = [];
    }

    public setNombre(nombre:string) : void{ this.nombre = nombre; }
    public getNombre() : string{ return this.nombre; }

    //CRUD videojuego:

    /* public createVideoJuego(videoJuego : VideoJuego) : void {
        if(videoJuego)
            this.videoJuegos.push(videoJuego);
    }

    public findVideoJuegos(videoJuego : VideoJuego) : boolean {
        for (let i = 0; i < this.videoJuegos.length; i++){
            if(this.videoJuegos[i] == videoJuego)
            console.log(`El puesto buscado es correcto, ${this.videoJuegos[i]}`);
            return true;
        }
        console.log("El puesto buscado es no existe");
        return false;     
    }

    public updateVideoJuegos(videoJuego : VideoJuego, posicion : number) : void {
        if(videoJuego)
        this.videoJuegos[posicion] = videoJuego;
    }

    public deleteVideoJuegos(posicion : number) : void {
        if(this.videoJuegos[posicion])
        this.videoJuegos.splice(posicion,1);
    }

    public readVideJuegos() : VideoJuego[] {
        let videoJuegos : VideoJuego [] = [];
        this.videoJuegos.forEach(VideoJuego =>{
            videoJuegos.push(VideoJuego)
        });
        return videoJuegos;
    }

    public readVideoJuegosTxt() : string {
        let textoVideojuegos : string = '';
        this.videoJuegos.forEach(videoJuego => {
            textoVideojuegos += videoJuego.imprimir() + '\n';
        });
        return textoVideojuegos;
    } */

    //CRUD Contenido:

    public createContenido(contenido : Contenido) : void {
        if(contenido.getTipo()=='videojuego'){
            this.videoJuegos.push(contenido);
            console.log(`Cargaste el videojuego ${contenido.getNombre()}`);            
        }else{
            if(contenido.getTipo()=='aplicacion') {
                this.aplicaciones.push(contenido);
                console.log(`Cargaste la aplicación ${contenido.getNombre()}`);
        }}
    }

    public findContenido(contenido : Contenido) : boolean {
        if(contenido.getTipo()=='videojuego'){
            for (let i = 0; i < this.videoJuegos.length; i++){
                if(this.videoJuegos[i] == contenido)
                console.log(`El puesto buscado es correcto, ${this.videoJuegos[i]}`);//ver como hacer que devuelva posicion
                return true;        
            }
        }else{
            if(contenido.getTipo()=='aplicacion') {
                for (let i = 0; i < this.aplicaciones.length; i++){
                    if(this.aplicaciones[i] == contenido)
                    console.log(`El puesto buscado es correcto, ${this.aplicaciones[i]}`);//ver como hacer que devuelva posicion
                    return true;
                }    
        }}
        console.log("El puesto buscado es no existe");
        return false;     
    }
    
    // Actualiza el objeto que estaba en esa posicion reemplazandolo por otro objeto
    public updateContenido(contenido : Contenido, posicion : number) : void {
        if(contenido.getTipo()=='videojuego'){
            /* if(contenido) */
            this.videoJuegos[posicion] = contenido;
            console.log(`Actualizaste el videojuego ${contenido.getNombre()}`);            
        }else{
            if(contenido.getTipo()=='aplicacion') {
                /* if(contenido) */
                this.aplicaciones[posicion] = contenido;
                console.log(`Actualizaste la aplicación ${contenido.getNombre()}`);
        }}
        
    }
    
    //Arreglar para que trabaje por posicion o nombre, no ambas-> está eliminando el objeto en posicion aunque tenga un nombre diferente al de la posicion
    public deleteContenido(contenido : Contenido, posicion : number) : void {
        if(contenido.getTipo()=='videojuego'){
            if(this.videoJuegos[posicion])
            this.videoJuegos.splice(posicion,1);             
            console.log(`Eliminaste el videojuego ${contenido.getNombre()}`);        
        }else{
            if(contenido.getTipo()=='aplicacion') {
                if(this.aplicaciones[posicion])
                this.aplicaciones.splice(posicion,1);
                console.log(`Eliminaste la aplicación ${contenido.getNombre()}`);
        }}
    }
     
   public readVideoJuegos() :  Contenido[] {
        let videoJuegos : Contenido [] = [];
        this.videoJuegos.forEach(videoJuego =>{
            videoJuegos.push(videoJuego)
        });
        return videoJuegos;
    } 
      
    public readVideoJuegosTxt() : string {
        let textoVideojuegos : string = '';
        this.videoJuegos.forEach(videoJuego => {
            textoVideojuegos += videoJuego.imprimir() + '\n';
        });
        return textoVideojuegos;
    }

    public readAplicaciones() :  Contenido[] {
        let aplicaciones : Contenido [] = [];
        this.aplicaciones.forEach(aplicacion =>{
            aplicaciones.push(aplicacion)
        });
        return aplicaciones;
    } 
      
    public readAplicacionesTxt() : string {
        let textoAplicaciones : string = '';
        this.aplicaciones.forEach(aplicacion => {
            textoAplicaciones += aplicacion.imprimir() + '\n';
        });
        return textoAplicaciones;
    }
}