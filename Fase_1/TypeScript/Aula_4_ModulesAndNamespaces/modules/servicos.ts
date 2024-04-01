import { Limpeza } from "./limpeza";
import { Reforma } from "./reforma";
import { Seguranca } from "./seguranca";

console.log('\n=== trabalhando com namespaces ===')

const prestador: string = 'Escudero';

Limpeza.limpar(prestador);
Reforma.pintar(prestador);
Seguranca.proteger(prestador);