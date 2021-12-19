const VALORES = [7.7, 8.9, 6.3, 9.2]
console.log(VALORES[0], VALORES[3])

console.log(VALORES.length-1)

VALORES.push({id: 3}, false, null, 'teste')
console.log(VALORES)

console.log(VALORES.pop())

delete VALORES[0]
console.log(VALORES)