import Pessoa from "./Pessoa";
import Cachorro from "./Cachorro";
import Gato from "./Gato";

const eduardo = new Pessoa('Eduardo Escudero', 39);
eduardo.exibirDetalhes();

const cachorro = new Cachorro('Bidu');
console.log(cachorro.getNome());
console.log(cachorro.emitirSom());

const gato = new Gato('Nino');
console.log(gato.getNome());
console.log(gato.emitirSom());