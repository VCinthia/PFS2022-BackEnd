//MODELADO TELEVISOR:
var Televisor = /** @class */ (function () {
    function Televisor(volumenInicial, canalInicial, modelo) {
        this.volumen = volumenInicial;
        this.canal = canalInicial;
        //constructor con parametros opcionales -> modelo?: string
        if (modelo == undefined)
            this.modelo = ' ';
        else
            this.modelo = modelo;
    }
    //funcionalidad
    Televisor.prototype.encenderApagar = function () {
        if (this.encendido) {
            this.encendido = false;
        }
        else {
            this.encendido = true;
        }
    };
    Televisor.prototype.subirVolumen = function () {
        this.volumen += 1;
    };
    Televisor.prototype.bajarVolumen = function () {
        this.volumen -= 1;
    };
    Televisor.prototype.subirCanal = function () {
        this.canal += 1;
    };
    Televisor.prototype.bajarCanal = function () {
        this.canal -= 1;
    };
    Televisor.prototype.elegirCanal = function (canal) {
        this.canal = canal;
    };
    Televisor.prototype.elegirModelo = function (modelo) {
        this.modelo = modelo;
    };
    return Televisor;
}());
//EXTENDEMOS DE LA CLASE TELEVISOR:
var volumenInicial = 10;
var canalInicial = 24;
var modelo = "Sony";
var primerTelevisor = new Televisor(volumenInicial, canalInicial, modelo); //en caso de que la clase no tenga contructor se creara sin parametros
var segundoTelevisor = new Televisor(volumenInicial, canalInicial);
var tercerTelevisor = new Televisor(volumenInicial, canalInicial);
primerTelevisor.encenderApagar();
primerTelevisor.subirCanal();
segundoTelevisor.encenderApagar();
segundoTelevisor.bajarCanal();
segundoTelevisor.bajarVolumen();
tercerTelevisor.encenderApagar();
tercerTelevisor.subirVolumen();
//CLASES EMPLEADAS COMO TIPOS:
var Televisores = [primerTelevisor, segundoTelevisor, tercerTelevisor];
//COMPOSICION DE CLASES:
var TelevisorComposicion = /** @class */ (function () {
    //funcionalidad
    function TelevisorComposicion(deco) {
        this.deco = deco;
    }
    TelevisorComposicion.prototype.encenderApagar = function () {
        if (this.encendido) {
            this.encendido = false;
        }
        else {
            this.encendido = true;
        }
    };
    TelevisorComposicion.prototype.subirVolumen = function () { this.deco.subirVolumen(); };
    TelevisorComposicion.prototype.bajarVolumen = function () { this.deco.bajarVolumen(); };
    TelevisorComposicion.prototype.subirCanal = function () { this.deco.subirCanal(); };
    TelevisorComposicion.prototype.bajarCanal = function () { this.deco.bajarCanal(); };
    TelevisorComposicion.prototype.elegirCanal = function (canal) { this.deco.elegirCanal(canal); };
    TelevisorComposicion.prototype.estaEncendido = function () { return this.encendido; };
    TelevisorComposicion.prototype.verCanal = function () { return this.deco.verCanal(); };
    TelevisorComposicion.prototype.verVolumen = function () { return this.deco.verVolumen(); };
    return TelevisorComposicion;
}());
var Decodificador = /** @class */ (function () {
    function Decodificador() {
    }
    //funcionalidad
    Decodificador.prototype.subirVolumen = function () { this.volumen += 1; };
    Decodificador.prototype.bajarVolumen = function () { this.volumen -= 1; };
    Decodificador.prototype.subirCanal = function () { this.canal += 1; };
    Decodificador.prototype.bajarCanal = function () { this.canal -= 1; };
    Decodificador.prototype.elegirCanal = function (canal) { this.canal = canal; };
    Decodificador.prototype.verCanal = function () { return this.canal; };
    Decodificador.prototype.verVolumen = function () { return this.volumen; };
    return Decodificador;
}());
var decodificador = new Decodificador();
var primerTelevisorComposicion = new TelevisorComposicion(decodificador);
primerTelevisorComposicion.elegirCanal(15);
