/*

DESAFIO - Lista de dependentes

Verificar a melhor forma de agregar a informação de um novo dependente ao Objeto Cliente.

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
    }]
}

cliente.dependentes.push({
    nome: "Cristiano",
    parentesco: "filho",
    dataNasc: "28/02/2029"
})

console.log(cliente)

const primeiroFilho = cliente.dependentes.filter(dependente => dependente.dataNasc==="28/02/2029")

console.log(primeiroFilho[0].nome)