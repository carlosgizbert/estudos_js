// const piloto define que ninguem pode atribuir outro array pra pilotos
const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() // massa quebrou o carro! / remove ultimo elemento do array

pilotos.push('Verstappen') // adiciona Verstappen na ultima linha
console.log(pilotos)

pilotos.shift() // remover o primeiro elemento do array
console.log(pilotos)

pilotos.unshift('Hamilton') // adiciona como primeiro item do array
console.log(pilotos)

// splice pode adicionar e remover elementos

// splice adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

// splice remover
pilotos.splice(3, 1) // massa quebrou
console.log(pilotos)

// slice parte e cria um novo array a partir do indice X
const algunsPilotos1 = pilotos.slice(2)
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.splice(1, 4)
console.log(algunsPilotos2)
