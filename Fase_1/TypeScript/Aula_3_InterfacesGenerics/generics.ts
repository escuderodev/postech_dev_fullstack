function primeiroElemento(array: number[]): number {
    return array[0];
}

function primeiroElementoComGenerics<T>(array: T[]): T {
    return array[0];
}

console.log('\n=== array de number ===')
const novoArray: number[] = [9,10,2,4,32,65,43,23];
console.log(novoArray);
console.log(primeiroElemento(novoArray));

console.log('\n=== array com generics ===')
const textArray: string[] = ['alicia','carol','eduardo','juan'];
console.log(textArray)
console.log(primeiroElementoComGenerics(textArray))

console.log('\n=== aplicando generics à classes ===')

interface TemDescricao {
    descricao: string;
}

class Caixa<T extends TemDescricao> {
    conteudo: T;

    constructor(conteudo: T) {
        this.conteudo = conteudo;
    }
}

class Brinquedo implements TemDescricao {
    descricao: string;
    valor: number;

    constructor(descricao: string, valor: number) {
        this.descricao = descricao;
        this.valor = valor;
    }
}

class BrinquedoSemDescricao {
    valor: number;

    constructor(valor:number) {
        this.valor = valor;
    }
}

const patins = new Brinquedo('Patins', 100.00);
const bola = new BrinquedoSemDescricao(100.00);
const carrinho = new Brinquedo('Carrinho', 150.00);

const caixaDeBrinquedos = new Caixa(carrinho);
console.log(caixaDeBrinquedos);