/* 
DESAFIO - Padronizando os nomes

    Precisamos padronizar a lista de aunos para conter apenas letras maiúsculas:

    - ['ana Julia', 'Caio vinicius', 'BIA silva']
*/

let nomes = ['ana Julia', 'Caio vinicius', 'BIA silva']

const nomesAtualizados = nomes.map(nome => nome.toUpperCase())

console.log(nomesAtualizados)