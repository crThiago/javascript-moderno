const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() // remove o ultimo elemento do array
console.log(pilotos)

pilotos.push('Verstappen')
console.log(pilotos)

pilotos.shift() // remove o primeiro elemtno do array
console.log(pilotos)

pilotos.unshift('Hamilton')
console.log(pilotos)

// splice pode adicionar e remover elementos

// adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

// remover elementos
pilotos.splice(3, 1) 
console.log(pilotos)

// Retorna um array apartir do indice passado no atributos
const algunsPilotos1 = pilotos.slice(2) 
console.log(algunsPilotos1)

// vai até o indice 4 mas não inclui
const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos2)