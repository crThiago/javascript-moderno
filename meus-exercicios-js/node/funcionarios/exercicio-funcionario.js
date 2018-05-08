/** Exercicio
 * Atraves de um json retornar a mulher chinesa com o menor salario
 */

 const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
 const axios = require('axios')

const mulheres = m => m.genero == "F"
const chineses = c => c.pais == "China"
const menorSalario = (func, funcAtual) => {
    return func.salario < funcAtual.salario ? func : funcAtual
}


axios.get(url).then(response => {
    const funcionarios = response.data
    console.log(funcionarios
        .filter(mulheres)
        .filter(chineses)
        .reduce(menorSalario))
})