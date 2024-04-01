import Animal from "./Animal";

export default class Gato extends Animal {

    constructor(nome:string) {
        super(nome)
    }
    
    emitirSom(): string {
        return 'O gato miou...'
    }
}