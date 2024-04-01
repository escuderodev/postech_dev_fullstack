var Aluno = /** @class */ (function () {
    function Aluno(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    Aluno.prototype.exibirDados = function () {
        return "O nome do aluno \u00E9 ".concat(this.nome, " e sua idade \u00E9 ").concat(this.idade, " anos.");
    };
    return Aluno;
}());
var aluno = new Aluno('Eduardo Escudero', 39);
console.log(aluno.exibirDados());
