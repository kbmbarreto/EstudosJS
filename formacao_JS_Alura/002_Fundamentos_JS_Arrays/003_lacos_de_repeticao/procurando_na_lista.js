/* 
DESAFIO - Procurando na lista
    -> Crie uma função que recebe como argumento o nome de um aluno;
    -> Verifique se o aluno está presente na lista e retorne sua média final
    que se encontra no mesmo índice;
    -> Caso o nome do aluno não esteja na lista, retorne uma mensagem indocando 
    que o aluno não foi encontrado.
*/

const alunos = ['João', 'Juliana', 'Caio', 'Ana']
const mediaDosAlunos = [10, 7, 9, 6]

let listaDeNotasDosAlunos = [alunos, mediaDosAlunos]

const exibeNomeNota = (nomeDoAluno) => {
    if(listaDeNotasDosAlunos[0].includes(nomeDoAluno)) {
        let indice = listaDeNotasDosAlunos[0].indexOf(nomeDoAluno)
        return listaDeNotasDosAlunos[0][indice] + ', sua média é ' + listaDeNotasDosAlunos[1][indice]
    } else {
        return "Aluno não cadastrado"
    }
}

console.log(exibeNomeNota("Ana"))