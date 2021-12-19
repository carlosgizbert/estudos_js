/*
Crie uma função que receba dois números e retorne se o primeiro é maior ou igual ao segundo.
Exemplos:
maiorOuIgual(0, 0) // retornará true
maiorOuIgual(0, "0") // retornará false
maiorOuIgual(5, 1) // retornará true
*/

const isNumber = val => {
  return typeof val === 'number'
}

function maiorOuIgual(num1, num2) {
  if (isNumber(num1) && isNumber(num2)) {
    if (num1 > num2 || num1 === num2) {
      return true
    }
  } else {
    return false
  }
}

console.log(maiorOuIgual(0, 0))
console.log(maiorOuIgual(0, '0'))
console.log(maiorOuIgual(5, 1))
