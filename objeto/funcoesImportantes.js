const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

// destructuring
Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
})

// congela a propriedade de um objeto
Object.defineProperties(pessoa, 'dataNascimento', {
    enumerable: true,
    writable: false,
    value: '01/01/2019'
})

// Object.assign (ECMAScript 2015) / concatena tudo que é passado nos parametros para o "dest"
const dest = { a: 1 }
const o1 = { b: 2}
const o2 = { c: 4, a: 4}
const obj = Object.assign(dest, o1, o2)