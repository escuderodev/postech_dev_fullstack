import Animal from "./Animal"

export default class Cachorro extends Animal{

    constructor(nome:string) {
        super(nome)
    }

    emitirSom(): string {
        return 'O Cachorro latiu...'
    }
}