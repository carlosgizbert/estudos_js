// "let i in" percorre a quantidade de indices
for (let letra in 'Cod3r') {
  console.log(letra)
}

// "let i of in" percorre os valores
for (let letra of 'Cod3r') {
  console.log(letra)
}

const assuntosEcma = ['Map', 'Set', 'Promise']
for (let assunto of assuntosEcma) {
  console.log(assunto)
}

//
const assuntosMap = new Map([
  ['Map', { abordado: true }],
  ['Set', { abordado: true }],
  ['Promise', { abordado: false }]
])

for (let [chave, valor] of assuntosMap) {
  console.log('Chave valor: ' + chave, valor)
}

for (let chave of assuntosMap.keys()) {
  console.log(chave)
}

for (let valor of assuntosMap.values()) {
  console.log(valor)
}

// destructuring / permite extrair dados de um Array ou Object em variáveis distintas.
for (let [chave, valor] of assuntosMap.entries()) {
  console.log(chave, valor)
}

const s = new Set(['a', 'b', 'c'])
for (let letra of s) {
  console.log(letra)
}
