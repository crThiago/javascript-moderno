const pai = {nome: 'Pedro', corCabelo: 'preto'}

const filha1 = Object.create(pai)
filha1.nome = 'Ana'
console.log(filha1.corCabelo)

const filha2 = Object.create(pai, {
    nome: {
        enumerable: true,
        writeable: false,
        value: 'Bia'
    }
})

console.log(filha2.nome)
filha2.nome = 'Carla' // Não pode ser alterado
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)


console.log(Object.keys(filha1))
console.log(Object.keys(filha2))


for(let key in filha2) {
    // verifica se os atributos são nativos do Objeto
    filha2.hasOwnProperty(key) ? console.log(key) : console.log(`Por herança ${key}`)
}