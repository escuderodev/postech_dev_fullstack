"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Calculadora = /** @class */ (function () {
    function Calculadora() {
    }
    Calculadora.prototype.somar = function (num1, num2) {
        return num1 + num2;
    };
    Calculadora.prototype.subtrair = function (num1, num2) {
        return num1 - num2;
    };
    Calculadora.prototype.multiplicar = function (num1, num2) {
        return num1 * num2;
    };
    Calculadora.prototype.dividir = function (num1, num2) {
        return num1 / num2;
    };
    return Calculadora;
}());
exports.default = Calculadora;
