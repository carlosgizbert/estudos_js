console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

// criando metodo "reverse" no prototype das strings
String.prototype.reverse = function () {
    return this.split('').reverse().join('')
}

console.log('Escola Cod3r'.reverse())


// criando metodo "first" no prototype dos arrays
Array.prototype.first = function() {
    return this[0]
}

console.log([1, 2, 3, 4, 5].first())
console.log(['a', 'b', 'c', 'd', 'e'].first())