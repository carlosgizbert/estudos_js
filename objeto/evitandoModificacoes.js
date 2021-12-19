// Object.preventExtensions - apenas impede a adição de novos atributos ao objeto
const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'promoção'
})
console.log(Object.isExtensible(produto))

// Object.seal - impede a adição e a deleção dos atributos
const pessoa = { nome: 'Juliana', idade: 35}
Object.seal(pessoa)
console.log('Selado:', Object.isSealed(pessoa))


// Object.freeze = impede qualquer tipo de modificações
Object.freeze(produto)
Object.freeze(pessoa)