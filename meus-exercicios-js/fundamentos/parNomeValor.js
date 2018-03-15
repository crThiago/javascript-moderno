// par nome/valor
const saudacoes = 'Opa' // contexto léxico 1

function exec () {
    const saudacao = 'Falaa' // contexto léxico 2
    return saudacao
}

// Objetos são grupos aninhados dde pares nome/valor
const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'Rua mato grosso',
        numero: 123
    }
}

console.log(saudacoes)
console.log(exec())
console.log(cliente)