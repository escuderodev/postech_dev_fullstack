function primeiroElemento(array) {
    return array[0];
}
function primeiroElementoComGenerics(array) {
    return array[0];
}
console.log('\n=== array de number ===');
var novoArray = [9, 10, 2, 4, 32, 65, 43, 23];
console.log(novoArray);
console.log(primeiroElemento(novoArray));
console.log('\n=== array com generics ===');
var textArray = ['alicia', 'carol', 'eduardo', 'juan'];
console.log(textArray);
console.log(primeiroElementoComGenerics(textArray));
console.log('\n=== aplicando generics à classes ===');
var Caixa = /** @class */ (function () {
    function Caixa(conteudo) {
        this.conteudo = conteudo;
    }
    return Caixa;
}());
var Brinquedo = /** @class */ (function () {
    function Brinquedo(descricao, valor) {
        this.descricao = descricao;
        this.valor = valor;
    }
    return Brinquedo;
}());
var BrinquedoSemDescricao = /** @class */ (function () {
    function BrinquedoSemDescricao(valor) {
        this.valor = valor;
    }
    return BrinquedoSemDescricao;
}());
var patins = new Brinquedo('Patins', 100.00);
var bola = new BrinquedoSemDescricao(100.00);
var carrinho = new Brinquedo('Carrinho', 150.00);
var caixaDeBrinquedos = new Caixa(carrinho);
console.log(caixaDeBrinquedos);
