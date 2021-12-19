// Função sem retorno
function imprimeSoma(a, b){
    console.log(a + b);
}

imprimeSoma(2,3)
imprimeSoma(2)
imprimeSoma(2,10,5,2,5,3,2)

// função com retorno
function soma(a, b = 1){
    return a + b;
}

console.log(soma(10,20))
console.log(soma(10))