Array.prototype.filter2 = function(callback) {
    const newArray = []
    for (let i = 0; i < this.length; i++) {
        if(callback(this[i], i, this)){
            newArray.push(this[i])
        }
    }
    return newArray
}


const produtos = [
    {nome: 'Notebook', preco: 2000, fragil: true},
    {nome: 'IPAD', preco: 3000, fragil: true},
    {nome: 'Celular', preco: 1000, fragil: true},
    {nome: 'Copo de Vidro', preco: 12, fragil: true},
    {nome: 'Copo de Plástico', preco: 10, fragil: false}
]

const produtoFragil = produtos => produtos.fragil
const produtoCaro = produtos => produtos.preco >= 1000

console.log(produtos.filter2(produtoFragil).filter2(produtoCaro))