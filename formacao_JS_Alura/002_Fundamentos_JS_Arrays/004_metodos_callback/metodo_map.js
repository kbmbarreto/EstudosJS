/* 
DESAFIO - Ponto Extra
    Um aluno recebeu um ponto extra nas suas notas, adicione 
    esse ponto em suas notas:

    10, 9, 8, 7, 6
*/

const notas = [10, 9, 8, 7, 6]
const notasAtualizadas = notas.map(nota => nota == 10 ?
    nota : ++ nota)

console.log(notasAtualizadas)