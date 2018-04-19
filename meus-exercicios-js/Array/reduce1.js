const alunos = [
    {nome: 'João', nota: 7.3, bolsista: false},
    {nome: 'Maria', nota: 9.3, bolsista: false},
    {nome: 'Pedro', nota: 8.3, bolsista: false},
    {nome: 'Ana', nota: 5.3, bolsista: true}
]

console.log(alunos.map(a => a.nota))
const retultado = alunos.map(a => a.nota).reduce(function(acumulador, atual) {
    console.log(acumulador, atual)
    return acumulador + atual
}, 10)


console.log(retultado)