"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Pessoa = /** @class */ (function () {
    function Pessoa(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    Pessoa.prototype.exibirDetalhes = function () {
        console.log("Nome: ".concat(this.nome, " - idade ").concat(this.idade, " anos."));
    };
    return Pessoa;
}());
exports.default = Pessoa;
