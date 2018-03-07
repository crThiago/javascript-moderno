const prod1 = {};
prod1.nome = 'Celular Asus Zenfone 3';
prod1.preco = 1000.00;
prod1['Desconto Legal'] = 0.40; // evitar atributos com espaço

console.log(prod1);

const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90,
    obj: {
        teste: 1,
        obj: {
            teste: 2
        }
    }
}
prod2['Desconto Legal'] = 0.40; // evitar atributos com espaço

console.log(prod2);