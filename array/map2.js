const produtos = [
    '{ "nome": "Borracha", "preco": 3.45}',
    '{ "nome": "Caderno", "preco": 13.90}',
    '{ "nome": "Kit de Lapis", "preco": 41.22}'
]

// metodos para transformar os elementos
const paraObj = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

// retorna só os preços
precosProdutos = produtos.map(paraObj).map(apenasPreco)

console.log(precosProdutos)