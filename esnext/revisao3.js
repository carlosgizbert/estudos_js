// ES8: Object.values/Object.entries
const obj = { a: 1, b: 2, c: 3 }

// retorna apenas chaves do objeto
console.log(Object.keys(obj))

// retorna apenas valores do objeto
console.log(Object.values(obj))

// retorna uma matriz/array chave/valor do objeto
console.log(Object.entries(obj))

// melhorias na notação literal
const nome = 'Carla'
const pessoa = {
  nome,
  ola() {
    return 'Oi gente!'
  }
}
console.log(pessoa.nome, pessoa.ola())

// Class
class Animal {}
class Cachorro extends Animal {
  falar() {
    return 'Aau au!'
  }
}

console.log(new Cachorro().falar())
