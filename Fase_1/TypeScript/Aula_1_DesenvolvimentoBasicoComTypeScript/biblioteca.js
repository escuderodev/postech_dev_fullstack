var Livro = /** @class */ (function () {
    function Livro(titulo, anoPublicacao) {
        this.titulo = titulo;
        this.anoPublicacao = anoPublicacao;
    }
    Livro.prototype.exibirDetalhes = function () {
        console.log("Livro ".concat(this.titulo, ", publicado em ").concat(this.anoPublicacao, "."));
    };
    return Livro;
}());
var casamentoBlindado = new Livro("Casamento Blindado", 2018);
casamentoBlindado.exibirDetalhes();
