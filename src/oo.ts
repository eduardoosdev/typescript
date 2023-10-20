class Pessoa {
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

class ContaBancaria {
    protected saldo: number = 0;
    public numeroConta: number;

    constructor (numeroDaConta: number) {
        this.numeroConta = numeroDaConta;
    }

    static retornNumeroDoBanco() {
        return 125;
    }

    private getSaldo() {
        return this.saldo;
    }

    depositar(valor: number) {
        this.saldo += valor;
    }
}

class ContaBancariaPessoaFisica extends ContaBancaria {
    depositar(valor: number): void {
        this.saldo = valor*2;
    }
}

const contaDoEduardo = new ContaBancariaPessoaFisica(123456)
contaDoEduardo.depositar(10);
ContaBancaria.retornNumeroDoBanco();
