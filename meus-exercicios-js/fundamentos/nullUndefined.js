let valor; // não inicializada
console.log(valor); // undefined não foi inicializada
//console.log(valor2); // is not defined

valor = null; // ausêsncia de valor
console.log(valor); // foi inicializada mas não aponta na memoria
//console.log(valor.toString()); // error

const produto = {}
console.log(produto.preco);// undefined
//console.log(produto.preco.atacado);// error não é possivel acessar a propriedade de um objeto undefined
console.log(produto);

produto.preco = 3.50;
console.log(produto);

produto.preco = undefined; // evitar atribuir undefined utilizar o null para limpar
console.log(!!produto.preco);
// delete produto.preco; objeto vazio
console.log(produto);


produto.preco = null //sem preço
console.log(!!produto.preco);
console.log(produto);
