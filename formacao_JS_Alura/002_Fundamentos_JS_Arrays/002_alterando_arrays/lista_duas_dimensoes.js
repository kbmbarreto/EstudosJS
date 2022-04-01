/* 
DESAFIO - Crie uma lista com os seguintes alunos e alunas: 
- 'João', 'Juliana', 'Caio', 'Ana'

Crie uma lista com as seguintes médias:
- 10, 8, 7.5, 9

Crie uma lista com 2 dimensões com os nomes e as médias
*/

const alunos = ['João', 'Juliana', 'Caio', 'Ana']
const medias = [10, 8, 7.5, 9]

let listaDeNotasEAlunos = [alunos, medias]

console.log(`${listaDeNotasEAlunos[0][0]}, sua média é ${listaDeNotasEAlunos[1][0]}`)
console.log(`${listaDeNotasEAlunos[0][1]}, sua média é ${listaDeNotasEAlunos[1][1]}`)
console.log(`${listaDeNotasEAlunos[0][2]}, sua média é ${listaDeNotasEAlunos[1][2]}`)
console.log(`${listaDeNotasEAlunos[0][3]}, sua média é ${listaDeNotasEAlunos[1][3]}`)