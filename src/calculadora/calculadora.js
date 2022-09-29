"use strict";
exports.__esModule = true;
exports.CalculadoraService = void 0;
var CalculadoraService = /** @class */ (function () {
    function CalculadoraService() {
        this.calculadora = [this.suma, this.resta, this.multiplicacion, this.division];
    }
    /* constructor(){
        this.calcular();
    } */
    CalculadoraService.prototype.suma = function (a, b) { return a + b; };
    ;
    CalculadoraService.prototype.resta = function (a, b) { return a - b; };
    ;
    CalculadoraService.prototype.multiplicacion = function (a, b) { return a * b; };
    ;
    CalculadoraService.prototype.division = function (a, b) { return a / b; };
    ;
    CalculadoraService.prototype.calcular = function (metodo, a, b) {
        if (this.calculadora[metodo])
            this.calculadora[metodo](a, b);
        console.log(metodo);
    };
    return CalculadoraService;
}());
exports.CalculadoraService = CalculadoraService;
