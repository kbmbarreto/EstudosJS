/* 
DESAFIO - Calcular a média entre as seguintes notas usando o ForEach:
    10, 6.5, 8 e 7.5
*/

const notas = [10, 6.5, 8, 7.5]
let somaDasNotas = 0

//callback
notas.forEach(nota => {
    somaDasNotas += nota
})

let media = somaDasNotas / notas.length

console.log(`A média é ${media}.`)