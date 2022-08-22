"use strict";
exports.__esModule = true;
var Animal = /** @class */ (function () {
    function Animal(especie, tamaño, peso, energia, eDormir, horasDormir, eComer, pComer) {
        this.especie = especie;
        this.tamaño = tamaño;
        this.peso = peso;
        this.energia = energia;
        this.eDormir = eDormir;
        this.horasDormir = horasDormir;
        this.eComer = eComer;
        this.pComer = pComer;
    }
    Animal.prototype.getEspecie = function () { return this.especie; };
    Animal.prototype.setEspecie = function (especie) { this.especie = especie; };
    Animal.prototype.getTamaño = function () { return this.tamaño; };
    Animal.prototype.setTamaño = function (tamaño) { this.tamaño = tamaño; };
    Animal.prototype.getPeso = function () { return this.peso; };
    Animal.prototype.setPeso = function (peso) { this.peso = peso; };
    Animal.prototype.getEnergia = function () { return this.energia; };
    Animal.prototype.setEnergia = function (energia) { this.energia = energia; };
    Animal.prototype.getEnergiaDormir = function () { return this.eDormir; };
    Animal.prototype.setEnergiaDormir = function (eDormir) { this.eDormir = eDormir; }; //valor de energia que suma ejemplo: 2
    Animal.prototype.getHorasDormir = function () { return this.horasDormir; };
    Animal.prototype.setHorasDormir = function (horasDormir) { this.horasDormir = horasDormir; };
    Animal.prototype.getEnergiaComer = function () { return this.eComer; };
    Animal.prototype.setEnergiaComer = function (eComer) { this.eComer = eComer; };
    Animal.prototype.getPesoComer = function () { return this.pComer; };
    Animal.prototype.setPesoComer = function (pComer) { this.pComer = pComer; };
    //funciona
    Animal.prototype.dormir = function () { this.energia += this.horasDormir * this.eDormir; };
    Animal.prototype.comer = function () { this.energia += this.eComer; this.peso += this.pComer; };
    Animal.prototype.imprimir = function () {
        /* console.log(`El Animal tiene las siguientes características {
            • especie: ${this.especie},
            • tamaño: ${this.getTamaño()} cm.,
            • peso: ${this.getPeso()} gramos,
            • energía inicial: ${this.getEnergia()} puntos,
            • cuando duerme recupera: ${this.getEnergiaDormir()} puntos de energía,
            • duerme: ${this.getHorasDormir()} horas,
            • cuando come recupera: ${this.getEnergiaComer()} puntos de energía,
            • cuando come gana: ${this.getPesoComer()} gramos de peso.
            • Por lo tanto cuando duerme `,this.dormir(),`tiene una energía de ${this.getEnergia()} puntos totales, y si luego come `, this.comer(),`tiene una energia  de ${this.getEnergia()} puntos y peso de: ${this.getPeso()} gramos`);
 */
        //no funciona porque no puede acceder a los elementos de la clase por ser privados
        return "El Animal tiene las siguientes caracter\u00EDsticas { especie: ".concat(this.especie, ", tama\u00F1o: ").concat(this.getTamaño(), " cm., peso: ").concat(this.getPeso(), ", energ\u00EDa inicial: ").concat(this.getEnergia(), ", cuando duerme recupera: ").concat(this.getEnergiaDormir(), " puntos de energ\u00EDa, duerme: ").concat(this.getHorasDormir(), " horas, cuando come recupera: ").concat(this.getEnergiaComer(), " puntos de energ\u00EDa, cuando come gana: ").concat(this.getPesoComer(), " gramos de peso. Por lo tanto cuando duerme tiene una energ\u00EDa de: ").concat(this.dormir(), " puntos totales, y cuando come tiene una energia y peso de: ").concat(this.comer(), ", respectivamente. }");
    };
    return Animal;
}());
exports["default"] = Animal;
var gato = new Animal('gato', 40, 5000, 100, 2, 10, 1, 100);
gato.imprimir();
gato.comer();
console.log("Luego de comer la energia es de ".concat(gato.getEnergia(), " puntos y pesa ").concat(gato.getPeso(), " gramos"));
gato.dormir();
console.log("Luego de dormir la energia es de ".concat(gato.getEnergia(), " puntos"));
