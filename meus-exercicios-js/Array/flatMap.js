const escola = [{
    nome: 'Tuma M1',
    alunos: [{
        nome: 'Gustavo',
        nota: 9.1
    }, {
        nome: 'Ana',
        nota: 8.1
    }]
}, {
    nome: 'Tuma M2',
    alunos: [{
        nome: 'Rebeca',
        nota: 6.1
    }, {
        nome: 'Roberto',
        nota: 8.8
    }]
}]

const getNotaAluno = aluno => aluno.nota
const getNotaTurma = turma => turma.alunos.map(getNotaAluno)

const notas1 = escola.map(getNotaTurma)
console.log(notas1)

Array.prototype.flatMap = function(callback) {
    return Array.prototype.concat.apply([], this.map(callback))
}

const notas2 = escola.flatMap(getNotaTurma)
console.log(notas2)