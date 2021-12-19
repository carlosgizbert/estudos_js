// pessoa -> 123 -> {...}
const pessoa = { nome: 'joao' }
pessoa.nome = 'pedro'
console.log(pessoa)

// congela objeto
Object.freeze(pessoa)

pessoa.nome = 'Maria'
pessoa.end = 'Rua ABC'
delete pessoa.nome

console.log(pessoa.nome)
console.log(pessoa)

// criar objeo constante, já cria e impede mudanças no objeto
const pessoaConstante = Object.freeze({nome: 'Joao'})
pessoaConstante.nome = 'Maria'
console.log(pessoaConstante)
