const alunos = [
    {nome: 'João', nota: 7.3, bolsista: true},
    {nome: 'Maria', nota: 9.3, bolsista: true},
    {nome: 'Pedro', nota: 8.3, bolsista: true},
    {nome: 'Ana', nota: 5.3, bolsista: false}
]


// Desafio 1: todos os alunos são bolsistas?
const todosBolsiltas = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(a => a.bolsista).reduce(todosBolsiltas))

// Desafio 1: Algum aluno é bolsista?
const algumBolsiltas = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(a => a.bolsista).reduce(algumBolsiltas))
