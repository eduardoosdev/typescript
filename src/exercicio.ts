function calculaNumeros(numero1: number, numero2: number): number {
    return numero1 * numero2;
}

class Ola {
    nome: string;
    renda?: number;

    constructor(nome: string, renda: number) {
        this.nome = nome;
        this.renda = renda;
    }

    dizOla(): string {
        return `${this.nome} disse oi, ${this.renda} esse é meu salário`;
    }
}