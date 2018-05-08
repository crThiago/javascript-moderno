const fs = require('fs')

const produto = {
    nome: 'Celular',
    preco: 1200.50,
    desconto: 0.50
}

fs.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(produto), err => {
    console.log(err || 'Arquivo salvo!')
})