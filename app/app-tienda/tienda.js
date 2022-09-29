"use strict";
exports.__esModule = true;
var Tienda = /** @class */ (function () {
    function Tienda(nombre) {
        this.nombre = nombre;
        this.videoJuegos = [];
        this.aplicaciones = [];
    }
    Tienda.prototype.setNombre = function (nombre) { this.nombre = nombre; };
    Tienda.prototype.getNombre = function () { return this.nombre; };
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
    Tienda.prototype.createContenido = function (contenido) {
        if (contenido.getTipo() == 'videojuego') {
            this.videoJuegos.push(contenido);
            console.log("Cargaste el videojuego ".concat(contenido.getNombre()));
        }
        else {
            if (contenido.getTipo() == 'aplicacion') {
                this.aplicaciones.push(contenido);
                console.log("Cargaste la aplicaci\u00F3n ".concat(contenido.getNombre()));
            }
        }
    };
    Tienda.prototype.findContenido = function (contenido) {
        if (contenido.getTipo() == 'videojuego') {
            for (var i = 0; i < this.videoJuegos.length; i++) {
                if (this.videoJuegos[i] == contenido)
                    console.log("El puesto buscado es correcto, ".concat(this.videoJuegos[i])); //ver como hacer que devuelva posicion
                return true;
            }
        }
        else {
            if (contenido.getTipo() == 'aplicacion') {
                for (var i = 0; i < this.aplicaciones.length; i++) {
                    if (this.aplicaciones[i] == contenido)
                        console.log("El puesto buscado es correcto, ".concat(this.aplicaciones[i])); //ver como hacer que devuelva posicion
                    return true;
                }
            }
        }
        console.log("El puesto buscado es no existe");
        return false;
    };
    // Actualiza el objeto que estaba en esa posicion reemplazandolo por otro objeto
    Tienda.prototype.updateContenido = function (contenido, posicion) {
        if (contenido.getTipo() == 'videojuego') {
            /* if(contenido) */
            this.videoJuegos[posicion] = contenido;
            console.log("Actualizaste el videojuego ".concat(contenido.getNombre()));
        }
        else {
            if (contenido.getTipo() == 'aplicacion') {
                /* if(contenido) */
                this.aplicaciones[posicion] = contenido;
                console.log("Actualizaste la aplicaci\u00F3n ".concat(contenido.getNombre()));
            }
        }
    };
    //Arreglar para que trabaje por posicion o nombre, no ambas-> está eliminando el objeto en posicion aunque tenga un nombre diferente al de la posicion
    Tienda.prototype.deleteContenido = function (contenido, posicion) {
        if (contenido.getTipo() == 'videojuego') {
            if (this.videoJuegos[posicion])
                this.videoJuegos.splice(posicion, 1);
            console.log("Eliminaste el videojuego ".concat(contenido.getNombre()));
        }
        else {
            if (contenido.getTipo() == 'aplicacion') {
                if (this.aplicaciones[posicion])
                    this.aplicaciones.splice(posicion, 1);
                console.log("Eliminaste la aplicaci\u00F3n ".concat(contenido.getNombre()));
            }
        }
    };
    Tienda.prototype.readVideoJuegos = function () {
        var videoJuegos = [];
        this.videoJuegos.forEach(function (videoJuego) {
            videoJuegos.push(videoJuego);
        });
        return videoJuegos;
    };
    Tienda.prototype.readVideoJuegosTxt = function () {
        var textoVideojuegos = '';
        this.videoJuegos.forEach(function (videoJuego) {
            textoVideojuegos += videoJuego.imprimir() + '\n';
        });
        return textoVideojuegos;
    };
    Tienda.prototype.readAplicaciones = function () {
        var aplicaciones = [];
        this.aplicaciones.forEach(function (aplicacion) {
            aplicaciones.push(aplicacion);
        });
        return aplicaciones;
    };
    Tienda.prototype.readAplicacionesTxt = function () {
        var textoAplicaciones = '';
        this.aplicaciones.forEach(function (aplicacion) {
            textoAplicaciones += aplicacion.imprimir() + '\n';
        });
        return textoAplicaciones;
    };
    return Tienda;
}());
exports["default"] = Tienda;
