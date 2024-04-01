export default class Animal {

    private nome: string;

    constructor(nome: string) {
        this.nome = nome;
    }

    getNome(): string {
        return this.nome;
    }

    emitirSom(): string {
        return 'O animal emite som...'
    }
}