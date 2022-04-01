/* 
DESAFIO - Imprima o índice e a lista com os seguintes números:
- 100, 200, 300, 400, 500, 600
*/

const numeros = [100, 200, 300, 400, 500, 600]

//for(indice; comparação; acrescenta o indice)
for(let i = 0; i < numeros.length; i++) {
    console.log(i, numeros[i])
}