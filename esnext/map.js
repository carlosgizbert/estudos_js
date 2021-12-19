// estrutura map foi adicionado recentemente no js

const tecnologias = new Map()
tecnologias.set('react', { framework: false })
tecnologias.set('angular', { framework: true })

// console.log(tecnologias.react) // nao funciona
console.log(tecnologias.get('react'))

const chavesVariadas = new Map([
  [function () {}, 'Funcao'],
  [{}, 'Objeto'],
  [123, 'Numero']
])

chavesVariadas.forEach((valor, indice) => {
  console.log(valor, indice)
})

// pergunta se a chave existe no map
console.log(chavesVariadas.has(123))

// deleta elemento do map
chavesVariadas.delete(123)
console.log(chavesVariadas.has(123))

// pergunta quantos elementos o map possui
console.log(chavesVariadas.size)

chavesVariadas.set(123, 'a')
chavesVariadas.set(123, 'b')
chavesVariadas.set(456, 'b')
console.log(chavesVariadas)
