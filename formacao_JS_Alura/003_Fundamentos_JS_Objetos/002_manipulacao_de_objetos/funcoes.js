/*

DESAFIO - Fazendo depósitos

Adcionar uma propriedade que permita "ações", para que os clientes que estão cadastrados consigam fazer operações bancárias.

*/

const cliente = {
    nome: 'Kleber',
    idade: 29,
    cpf: '12332112332',
    email: 'kleber.barreto@msn.com',
    fones: ['551187655678', '551298765544'],
    dependentes: [{
        nome: 'Bárbara',
        parentesco: 'esposa',
        dataNasc: '09/10/1993'
    }],
    saldo: 100,
    depositar:function(valor) {
        this.saldo += valor
    }
}

console.log(cliente.saldo)
cliente.depositar(30)
console.log(cliente.saldo)