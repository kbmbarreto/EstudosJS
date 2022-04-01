/* 
DESAFIO - Calcular a média entre as seguintes notas usando o For:
    10, 6.5, 8 e 7.5
*/

const notas = [10, 6.5, 8, 7.5]
let somaDasNotas = 0

for(i =0; i < notas.length; i++) {
    somaDasNotas = somaDasNotas + notas[i];
    //somaDasNotas += notas[i];
}

let media = somaDasNotas / notas.length

console.log(`A média é ${media}.`)