class Livro {
    titulo: string;
    anoPublicacao: number;

    constructor(titulo: string, anoPublicacao: number) {
        this.titulo = titulo;
        this.anoPublicacao = anoPublicacao;
    }

    exibirDetalhes() {
        console.log(`Livro ${this.titulo}, publicado em ${this.anoPublicacao}.`)
    }
}

const casamentoBlindado = new Livro("Casamento Blindado", 2018);
casamentoBlindado.exibirDetalhes()