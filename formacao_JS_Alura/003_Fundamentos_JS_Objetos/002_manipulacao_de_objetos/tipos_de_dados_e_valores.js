/*

DESAFIO - Lista de telefones

Acessar a lista de números de telefone das pesoas cadastadas no sistema  e 
imprimi-la, verificando se há maias de um número em algum cadastro.

*/

const cliente = {
    nome: "Kleber",
    idade: 29,
    cpf: "12332121233",
    email: "kleber.barreto@msn.com",
    fones:["55912345498", "5521988882222"]
}

cliente.fones.forEach(fone => console.log(fone))