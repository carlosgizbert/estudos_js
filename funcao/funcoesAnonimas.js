// função anonima é uma função sem nome

const somar = function (x, y){
    return x + y
}

const multiplicar = function (x, y) {
    return x * y
}

const imprimirResultado = function (a, b, operacao = somar){
    console.log(operacao(a, b))
}

imprimirResultado(5, 5)
imprimirResultado(5, 5, multiplicar)
imprimirResultado(5, 5, somar)
imprimirResultado(3, 4, function (x, y) {
    return x -y
})
imprimirResultado(5, 5, (x, y) => x * y )

const pessoa = {
    falar: function () {
        console.log ('Opa')
    }
}
pessoa.falar();