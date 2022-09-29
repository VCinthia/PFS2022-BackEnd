"use strict";
exports.__esModule = true;
exports.Contenido = void 0;
var Contenido = /** @class */ (function () {
    function Contenido(tipo, nombre, fechaPublicacion, descripcion, img) {
        this.tipo = tipo;
        this.nombre = nombre;
        this.fechaPublicacion = fechaPublicacion;
        this.descripcion = descripcion;
        this.img = img;
    }
    Contenido.prototype.setTipo = function (tipo) { this.tipo = tipo; };
    Contenido.prototype.getTipo = function () { return this.tipo; };
    Contenido.prototype.setNombre = function (nombre) { this.nombre = nombre; };
    Contenido.prototype.getNombre = function () { return this.nombre; };
    Contenido.prototype.setFecha = function (fechaPublicacion) { this.fechaPublicacion = fechaPublicacion; };
    Contenido.prototype.getFecha = function () { return this.fechaPublicacion; };
    Contenido.prototype.setDescripcion = function (descripcion) { this.descripcion = descripcion; };
    Contenido.prototype.getDescripcion = function () { return this.descripcion; };
    Contenido.prototype.setImg = function (img) { this.img = img; };
    Contenido.prototype.getImg = function () { return this.img; };
    Contenido.prototype.imprimir = function () {
        return "El contenido es: { tipo: ".concat(this.tipo, ", nombre: ").concat(this.nombre, ", fecha de lanzamiento: ").concat(this.fechaPublicacion, ", descripci\u00F3n: ").concat(this.descripcion, " y su imagen esta cargada en el siguiente enlace: ").concat(this.img, "}");
    };
    return Contenido;
}());
exports.Contenido = Contenido;
