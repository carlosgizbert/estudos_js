const PESO_1 = 1.0
const PESO_2 = Number('2.0')

console.log(PESO_1, PESO_2)

console.log(Number.isInteger(PESO_1))

const AVALIACAO_1 = 10
const AVALIACAO_2 = 5

const total = AVALIACAO_1 * PESO_1 + AVALIACAO_2 * PESO_2
const media = total / (PESO_1 + PESO_2)

console.log(media.toFixed(2))
