 const notas = [7.7, 6.5, 4.4, 6.5, 9.9, 10, 10, 2, 3.76]

// Sem callback
const notasBaixas = []

for(let i in notas){
    if (notas[i] < 7){
        notasBaixas.push(notas[i])
    }
}

console.log(notasBaixas)

// Com callback
const notasBaixas2 = notas.filter(function (nota) {
    return nota < 7
})
console.log(notasBaixas2)

// Com callback usando arrow function

const notasMenorQue7 = nota => nota < 7
const notasBaixas3 = notas.filter(notasMenorQue7)
console.log(notasBaixas3)