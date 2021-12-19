/*
Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração,
multiplicação e divisão desses valores.
*/

calcular = function(a, b){
    return console.log(`
    Valores: ${a} e ${b}
    Soma: ${a+b}
    Subtração: ${a-b}
    Multiplicação: ${a*b}
    Divisão: ${a/b}
    `)
}
calcular(1, 3)