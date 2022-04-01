/*

DESAFIO - Printar infos

Acessar um objeto com informações de um cliente e exibir essas informações no console.

*/

const cliente = {
    nome: "Kleber",
    idade: 29,
    cpf: "12332121233",
    email: "kleber.barreto@msn.com"
}

console.log(`Cliente ${cliente.nome}, possui ${cliente.idade} de idade`)

console.log(cliente.cpf.substring(0,3))