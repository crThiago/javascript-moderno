// Operador ... rest(juntar)/spread(espalhar)
// Usar rest como parâmetro de função

// usar spread com objeto
const funcionario = { nome: 'Maria', salario: 12345.56 }
const clone = { ativo: true, ...funcionario}
console.log(clone)

const grupoA = ['João', 'Pedro', 'Gloria']
const grupoFinal = ['Maria', ...grupoA, 'Rafaela']
console.log(grupoFinal)