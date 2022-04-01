//Notas 10, 6.5, 8, 7.5


//Forma simples sem array
let nota1 = 10
let nota2 = 6.5
let nota3 = 8
let nota4 = 7.5

let media = (nota1 + nota2 + nota3 + nota4)/4

console.log(media)

//Com array
const notas = [10, 6.5, 8, 7.5]

let mediaArray = (notas[0] + notas[1] + notas[2] + notas[3])/ notas.length

console.log(mediaArray)



//Agora, utilizando o reduce

const notasReduce = [10, 6.5, 8, 7.5]

const mediaReduce = notasReduce.reduce((acumulador, atual) => atual + acumulador, 0) / notasReduce.length

console.log(mediaReduce)