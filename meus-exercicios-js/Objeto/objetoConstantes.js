// pessoa -> endereço 123 -> {...}
const pessoa = { nome: 'Joao' }
pessoa.nome = 'Pedro'
console.log(pessoa)

// pessoa -> endereço 456 -> {...}
//pessoa = { nome: 'Ana' } // Gera um erro

// Objeto não modifica
Object.freeze(pessoa)

pessoa.nome = 'Maria'
pessoa.end = 'Rua teste'
delete pessoa.nome

console.log(pessoa.nome)
console.log(pessoa)

const pessoaConstante = Object.freeze({ nome: 'João' })
pessoaConstante.nome = 'Maria'

console.log(pessoaConstante)