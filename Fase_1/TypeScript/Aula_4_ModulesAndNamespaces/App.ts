import Calculadora from "./models/Calculadora";


console.log('\n=== trabalhando com a calculadora ===')

let num1 = 4;
let num2 = 2;

const calculadora = new Calculadora();

console.log(`${num1} + ${num2} = ${calculadora.somar(num1,num2)}`);
console.log(`${num1} - ${num2} = ${calculadora.subtrair(num1,num2)}`);
console.log(`${num1} x ${num2} = ${calculadora.multiplicar(num1,num2)}`);
console.log(`${num1} / ${num2} = ${calculadora.dividir(num1,num2)}`);