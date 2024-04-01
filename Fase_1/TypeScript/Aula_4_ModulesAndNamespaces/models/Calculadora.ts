export default class Calculadora {
    private num1: number;
    private num2: number;

    somar(num1: number,num2: number): number {
        return num1 + num2;
    }

    subtrair(num1: number,num2: number): number {
        return num1 - num2;
    }

    multiplicar(num1: number,num2: number): number {
        return num1 * num2;
    }

    dividir(num1: number,num2: number): number {
        return num1 / num2;
    }
}