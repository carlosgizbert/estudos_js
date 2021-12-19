// Divisivel por 3 => Fizz
// Divisível por 5 => Buzz
// Divisível por 3 e 5 => FizzBuzz

// n é numero ?
// n é divisivel por 3 && 5 ? FizzBuzz : n
// n é divisível apenas por 5 ? Buzz : n

fizzBuzz = x => {
  if (typeof x !== 'number') {
    return 'Não é um número'
  }
  if (x % 3 === 0 && x % 5 === 0) {
    return 'FizzBuzz'
  } else if (x % 3 === 0) {
    return 'Fizz'
  } else if (x % 5 === 0) {
    return 'Buzz'
  }
  return x
}

console.log(fizzBuzz(11))
