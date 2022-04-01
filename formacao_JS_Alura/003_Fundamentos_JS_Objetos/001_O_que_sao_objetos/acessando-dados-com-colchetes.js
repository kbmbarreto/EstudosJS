/*

DESAFIO - Acessar chaves

Consultar um objeto utilizando uma lista de chaves relativas a informações de clientes gerada 
pelo sistema e printar o resultado na tela.

*/

const cliente = {
    nome: "Kleber",
    idade: 29,
    cpf: "12332121233",
    email: "kleber.barreto@msn.com"
}

const chaves =["nome", "idade", "cpf", "email"]

//console.log(cliente[chaves[0]])

chaves.forEach(info => console.log(cliente[info]))