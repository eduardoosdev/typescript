"use strict";
function calculaNumeros(numero1, numero2) {
    return numero1 * numero2;
}
class Ola {
    constructor(nome, renda) {
        this.nome = nome;
        this.renda = renda;
    }
    dizOla() {
        return `${this.nome} disse oi, ${this.renda} esse é meu salário`;
    }
}
