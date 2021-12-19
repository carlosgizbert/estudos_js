const primeiroElemento = arrayOuString => arrayOuString[0]
const letraMinuscula = string => string.toLowerCase()

let p = new Promise(function(resolve){
    resolve(['Ana', 'Carlos', 'Bia', 'Daniel'])
}).then(valor => valor[0])
    .then(primeiroElemento)
    .then(primeiroElemento)
    .then(letraMinuscula)
    .then(console.log)