/*

DESAFIO - Puxando relatório

Percorrer um objeto e extrair informações básicas do cliente em um formato mais legível e de forma automatizada para fornecer outros departamentos do banco.

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

let relatorio = "";

for(let info in cliente) {
    if(typeof cliente[info] === "object" || typeof cliente[info] === "function")
    {
        continue
    } else{
        relatorio += `${info} - ${cliente[info]}
        `
    }
}

console.log(relatorio)