const produtos = [
    {nome: 'Notebook', preco: 2000, fragil: true},
    {nome: 'IPAD', preco: 3000, fragil: true},
    {nome: 'Celular', preco: 1000, fragil: true},
    {nome: 'Copo de Vidro', preco: 12, fragil: true},
    {nome: 'Copo de Plástico', preco: 10, fragil: false}
]

console.log(produtos.filter(function(p){
    return p.preco > 2500
    //return false
    //return true
}))

const produtoFragil = produtos => produtos.fragil
const produtoCaro = produtos => produtos.preco >= 1000

console.log(produtos.filter(produtoFragil).filter(produtoCaro))