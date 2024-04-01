export default class Pessoa {
    nome: string;
    idade: number;

    constructor(nome:string, idade:number) {
        this.nome = nome;
        this.idade = idade
    }

    exibirDetalhes() {
        console.log(`Nome: ${this.nome} - idade ${this.idade} anos.`);
    }
}