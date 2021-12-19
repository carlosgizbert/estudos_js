console.log(typeof Array, typeof new Array)

let aprovados = new Array('Bia', 'Carlos', 'Ana')

aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3]) // nao existe, retorna undefined

aprovados[2] = 'Paulo' // substitui elemento do indice 2
aprovados.push('Abia') // insere novo elemento com novo indice

aprovados.sort() // ordena o array
console.log(aprovados)

delete aprovados[1] // deleta o valor do indice 1, não reordena outros indices e valores

aprovados.splice(1, 2) // primeiro argumento define o indice inicial, segundo argumento qtd de elementos quer excluir a partir do primeiro indice
console.log(aprovados.length) // lista quantidade de indices do array