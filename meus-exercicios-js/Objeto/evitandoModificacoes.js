// Object.preventExtensions
// Impede que o objeto aceite novos atributos.
const produto = Object.preventExtensions({
    nome: 'Qualquer',
    preco: 1.99,
    tag: 'promocao'
})

console.log('Extensível', Object.isExtensible(produto))

produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar branca'
delete produto.tag
console.log(produto)

// Object.seal
// Impede a inclusão e exclusão de atributos
const pessoa = {nome: 'Juliana', idade: 50}
Object.seal(pessoa)
console.log('Selado: ', Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 30
console.log(pessoa)

// Object.freeaze = selado + valores constantes
// impede a inclusão, alteração e exclusao de atributos