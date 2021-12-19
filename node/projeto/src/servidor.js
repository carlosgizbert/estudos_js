// porta para comunicação
const porta = 3003

// importa express
const express = require('express')

// atribui o resultado para a variavel app
const app = express()

const bodyParser = require('body-parser')
const bancoDeDados = require('./bancoDeDados.js')

app.use(bodyParser.urlencoded({ extended: true }))

// função middleware
app.get('/produtos', (req, res, next) => {
  res.send(bancoDeDados.getProdutos()) // metodo send converte para JSON
})

app.get('/produtos/:id', (req, res, next) => {
  res.send(bancoDeDados.getProduto(req.params.id))
})

app.post('/produtos', (req, res, next) => {
  const produto = bancoDeDados.salvarProduto({
    nome: req.body.nome,
    preco: req.body.preco
  })
  res.send(produto) // JSON
})

app.put('/produtos/:id', (req, res, next) => {
  const produto = bancoDeDados.salvarProduto({
    id: req.params.id,
    nome: req.body.nome,
    preco: req.body.preco
  })
  res.send(produto) // JSON
})

app.delete('/produtos/:id', (req, res, next) => {
  const produto = bancoDeDados.excluirProduto(req.params.id)
  res.send(produto)
})

app.listen(porta, () => {
  console.log(`Servidor executando na porta ${porta}`)
})
