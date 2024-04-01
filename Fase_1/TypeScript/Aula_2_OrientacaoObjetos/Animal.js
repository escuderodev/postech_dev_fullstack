"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Animal = /** @class */ (function () {
    function Animal(nome) {
        this.nome = nome;
    }
    Animal.prototype.getNome = function () {
        return this.nome;
    };
    Animal.prototype.emitirSom = function () {
        return 'O animal emite som...';
    };
    return Animal;
}());
exports.default = Animal;
