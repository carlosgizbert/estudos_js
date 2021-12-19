Array.prototype.map2 = function(callback){
    const newArray = []
    for(let i = 0; i < this.length; i++){
        newArray.push(callback(this[i], i, this))
    }
    return newArray
}

const produtos = [
    '{ "nome": "Borracha", "preco": 3.45}',
    '{ "nome": "Caderno", "preco": 13.90}',
    '{ "nome": "Kit de Lapis", "preco": 41.22}',
    '{ "nome": "Caneta", "preco": 7.5}'
]

// metodos para transformar os elementos
const paraObj = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

// retorna só os preços
precosProdutos = produtos.map2(paraObj).map2(apenasPreco)

console.log(precosProdutos)