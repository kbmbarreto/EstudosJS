/* 
DESAFIO - Filtrando por nota

    Depois de calcular a média dos alunos, precisamos mostrar que mestá 
    reprovado entre os alunos:

    - 'Ana', 'Marcos', 'Maria', 'Mauro'
    - 7, 4.5, 8, 7.5
*/

const nomes = ['Ana', 'Marcos', 'Maria', 'Mauro']
const notas = [7, 4.5, 8, 7.5]

const reprovados = nomes.filter((_aluno, indice) => 
    notas[indice] < 5)
console.log(`Reprovados: ${reprovados}`)