var Pajaro = /** @class */ (function () {
    //funcionalidad
    //Extiendo de clase Animal
    function Pajaro(animal) {
        this.animal = animal;
    }
    /*getters*/
    //verPeso muestra el peso actual
    Pajaro.prototype.verPeso = function () { return this.animal.verPeso(); };
    //verEnergia muestra el estado actual de energia
    Pajaro.prototype.verEnergia = function () { return this.animal.verEnergia(); };
    Pajaro.prototype.verTamaño = function () { return this.animal.verTamaño(); };
    Pajaro.prototype.verHorasDormir = function () { return this.animal.verHorasDormir(); };
    Pajaro.prototype.verEnergiaComer = function () { return this.animal.verEnergiaComer(); };
    Pajaro.prototype.verPesoComer = function () { return this.animal.verPesoComer(); };
    /*setters*/
    //defPeso define energia inicial
    Pajaro.prototype.defPeso = function (peso) { this.animal.defPeso(peso); };
    //defEnergia define energia inicial
    Pajaro.prototype.defEnergia = function (energia) { this.animal.defEnergia(energia); };
    //defTamaño define tamaño
    Pajaro.prototype.defTamaño = function (tamaño) { this.animal.defTamaño(tamaño); };
    //defEnergiaDomir define que porcentaje va a reducir
    Pajaro.prototype.defEnergiaDormir = function (eDormir) { this.animal.defEnergiaDormir(eDormir); };
    //defHorasDormir define cuantas horas va dormir
    Pajaro.prototype.defHorasDormir = function (horasDormir) { this.animal.defHorasDormir(horasDormir); };
    //defEnergiaComer define cuantas horas va dormir
    Pajaro.prototype.defEnergiaComer = function (eComer) { this.animal.defEnergiaComer(eComer); };
    //defPesoComer define el peso que gana comiendo
    Pajaro.prototype.defPesoComer = function (pComer) { this.animal.defPesoComer(pComer); };
    //kmDistancia define cantidad de kilometros que recorre
    Pajaro.prototype.defKmDistancia = function (kmDistancia) { this.kmDistancia = kmDistancia; };
    //kmEnergia debe definir que porcentaje de energia ejemplo: '10%'
    Pajaro.prototype.defkmEnergia = function (kmEnergia) { this.kmDistancia = kmEnergia; };
    //dormir define cuanta energia queda despues de dormir
    Pajaro.prototype.dormir = function () { return this.animal.dormir(); };
    //comer define cuanta energia queda despues de comer
    Pajaro.prototype.comer = function () { return this.animal.comer(); };
    //volarDistancia tiene que restar energia
    Pajaro.prototype.volarDistancia = function (energia) { this.defEnergia(energia -= (this.kmDistancia * this.kmEnergia)); };
    return Pajaro;
}());
var Animal = /** @class */ (function () {
    function Animal() {
    }
    //funcionalidad
    /*getters*/
    Animal.prototype.verTamaño = function () { return this.tamaño; };
    Animal.prototype.verPeso = function () { return this.peso; };
    Animal.prototype.verEnergia = function () { return this.energia; };
    Animal.prototype.verHorasDormir = function () { return this.horasDormir; };
    Animal.prototype.verEnergiaComer = function () { return this.eComer; };
    Animal.prototype.verPesoComer = function () { return this.pComer; };
    Animal.prototype.verEnergiaDormir = function () { return this.eDormir; };
    /*setters*/
    Animal.prototype.defTamaño = function (tamaño) { this.tamaño = tamaño; };
    Animal.prototype.defPeso = function (peso) { this.peso = peso; };
    Animal.prototype.defEnergia = function (energia) { this.energia = energia; };
    Animal.prototype.defEnergiaDormir = function (eDormir) { this.eDormir = eDormir; }; //valor de energia que suma ejemplo: 2      
    Animal.prototype.defHorasDormir = function (horasDormir) { this.horasDormir = horasDormir; };
    Animal.prototype.defEnergiaComer = function (eComer) { this.eComer = eComer; };
    Animal.prototype.defPesoComer = function (pComer) { this.pComer = pComer; };
    Animal.prototype.dormir = function () { this.energia += this.horasDormir * this.eDormir; };
    Animal.prototype.comer = function () { this.energia += this.eComer; this.peso += this.pComer; };
    return Animal;
}());
var animal = new Animal;
var golondrina = new Pajaro(animal);
golondrina.defEnergia(100);
console.log("El pajaro inicia con ".concat(golondrina.verEnergia(), " de energia"));
golondrina.defPeso(2);
golondrina.defTamaño(40);
golondrina.defEnergiaDormir(1);
golondrina.defHorasDormir(8);
golondrina.defEnergiaComer(4);
golondrina.defPesoComer(1);
console.log("El pajaro inicia con un peso de ".concat(golondrina.verPeso(), " kg"));
golondrina.comer();
console.log("El pajaro despues de comer tiene ".concat(golondrina.verEnergia(), " de energia y pesa ").concat(golondrina.verPeso(), " kg"));
golondrina.dormir();
console.log("El pajaro despues de dormir ".concat(golondrina.verHorasDormir(), " hrs. aumenta su energia en ").concat(golondrina.verEnergia()));
