const criarProduto = (nome = '-', preco = '00.00', desconto = 0.1) => {
    return {
        nome,
        preco,
        desconto
    }
}
console.log(criarProduto('Playstation', '2500'));
console.log(criarProduto('Ipad', '4699'));