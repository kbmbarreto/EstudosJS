/*

DESAFIO - Compondo um objeto

Adicionar dependentes para um dos clientes cadastrados, com nome, idade e parentesco.

*/

const cliente = {
    nome: "Kleber",
    idade: 29,
    cpf: "12332121233",
    email: "kleber.barreto@msn.com",
    fones:["55912345498", "5521988882222"]
}

cliente.dependentes = {
    nome: "Bázinha",
    parentesco: "Esposa",
    dataNasc: "09/10/1993"
}

console.log(cliente)

cliente.dependentes.nome = "Bárbara de Deus"

console.log(cliente)