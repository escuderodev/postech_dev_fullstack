interface Pessoa {
    nome: string;
    idade: number;
    exibirDados(): string;
}

class Aluno implements Pessoa {
    nome: string;
    idade: number;
    
    constructor(nome: string, idade: number) {
        this.nome = nome;
        this.idade = idade;
    }

    exibirDados(): string {
        return `O nome do aluno é ${this.nome} e sua idade é ${this.idade} anos.`
    }
}

const aluno = new Aluno('Eduardo Escudero', 39);
console.log(aluno.exibirDados());