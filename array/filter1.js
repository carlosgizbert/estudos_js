// filter cria um novo array de tamanho igual ou menor que o original de acordo com condição

const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true},
    { nome: 'iPad Pro', preco: 4199, fragil: true},
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true},
    { nome: 'Copo de Plástico', preco: 18.99, fragil: false}
]

const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil

produtosPremium = produtos.filter(caro).filter(fragil)

console.log(produtosPremium)