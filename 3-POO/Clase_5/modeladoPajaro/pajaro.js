"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var animal_1 = require("./animal");
var Pajaro = /** @class */ (function (_super) {
    __extends(Pajaro, _super);
    function Pajaro(especie, tamaño, peso, energia, eDormir, horasDormir, eComer, pComer, especiePajaro, kmEnergia, kmDistancia) {
        var _this = _super.call(this, especie, tamaño, peso, energia, eDormir, horasDormir, eComer, pComer) || this;
        _this.especiePajaro = especiePajaro;
        _this.kmEnergia = kmEnergia;
        _this.kmDistancia = kmDistancia;
        return _this;
    }
    Pajaro.prototype.getNombreEspecie = function () { return this.especiePajaro; };
    Pajaro.prototype.setNombreEspecie = function (especiePajaro) { this.especiePajaro = especiePajaro; };
    Pajaro.prototype.getKmEnergia = function () { return this.kmEnergia; };
    Pajaro.prototype.setKmEnergia = function (kmEnergia) { this.kmEnergia = kmEnergia; };
    Pajaro.prototype.getKmDistancia = function () { return this.kmDistancia; };
    Pajaro.prototype.setKmDistancia = function (kmDistancia) { this.kmDistancia = kmDistancia; };
    //volarDistancia tiene que restar energia-- NO FUNCIONA PORQUE NO PUEDE ACCEDER DESDE PAJARO A ENERGIA DE ANIMAL?     
    Pajaro.prototype.volarDistancia = function () { this.energia -= this.kmDistancia * this.kmEnergia; };
    Pajaro.prototype.imprimir = function () {
        console.log("El animal ".concat(this.getEspecie(), " tiene las siguientes caracter\u00EDsticas {\n             \u2022 especie especifica: ").concat(this.especiePajaro, ", \n             \u2022 tama\u00F1o: ").concat(this.getTamaño(), " cm., \n             \u2022 peso: ").concat(this.getPeso(), " gramos, \n             \u2022 energ\u00EDa inicial: ").concat(this.getEnergia(), " puntos, \n             \u2022 cuando duerme recupera: ").concat(this.getEnergiaDormir(), " puntos de energ\u00EDa, \n             \u2022 duerme: ").concat(this.getHorasDormir(), " horas, \n             \u2022 cuando come recupera: ").concat(this.getEnergiaComer(), " puntos de energ\u00EDa, \n             \u2022 cuando come gana: ").concat(this.getPesoComer(), " gramos de peso. \n             \u2022 Tambi\u00E9n realiza una distancia de ").concat(this.getKmDistancia(), " km y consume ").concat(this.getKmEnergia(), " de energ\u00EDa por cada Km recorrido.\n             \u2022 Por lo tanto cuando duerme "), this.dormir(), "tiene una energ\u00EDa de: ".concat(this.getEnergia(), " puntos totales, y si luego come "), this.comer(), "tiene una energia de ".concat(this.getEnergia(), " puntos y peso de ").concat(this.getPeso(), " gramos. \n             \u2022 Luego, cuando vuela "), this.volarDistancia(), " queda con ".concat(this.getEnergia(), " puntos de energia."));
        //no funciona porque no puede acceder a los elementos de la clase por ser privados
        /* return `El Animal tiene las siguientes características { especie: ${this.especie}, tamaño: ${this.getTamaño()} cm., peso: ${this.getPeso()}, energía inicial: ${this.getEnergia()}, cuando duerme recupera: ${this.getEnergiaDormir()} puntos de energía, duerme: ${this.getHorasDormir()} horas, cuando come recupera: ${this.getEnergiaComer()} puntos de energía, cuando come gana: ${this.getPesoComer()} gramos de peso. Por lo tanto cuando duerme tiene una energía de: ${this.dormir()} puntos totales, y cuando come tiene una energia y peso de: ${this.comer()}, respectivamente. }`*/
    };
    return Pajaro;
}(animal_1["default"]));
exports["default"] = Pajaro;
/* let golondrina : Pajaro = new Pajaro('Golondrina', 15, 16, 100, 1, 8, 2, 1, 'Hirundinidae',2,4);
golondrina.imprimir() */ 
