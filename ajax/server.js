const bodyParser = require('body-parser')
const express = require('express')
const path = require('path')
const multer = require('multer')

const app = express()

app.use(express.static('.'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// UPLOAD DE ARQUIVOS
const pastaUpload = path.resolve(__dirname, 'upload')

const configMulter = multer.diskStorage({
  destination: pastaUpload,
  filename: (request, file, callback) => {
    const filename = file.filename

    return callback(null, filename)
  }
})

app.get('/teste', (req, resp) => resp.send(new Date()))

app.post('/formulario', (req, res) => {
  res.send({
    ...req.body,
    id: 7
  })
})

app.get('/parouImpar', (req, res) => {
  // req.body
  const par = parseInt()
})

app.listen(8080, () => console.log('Servidor rodando...'))
