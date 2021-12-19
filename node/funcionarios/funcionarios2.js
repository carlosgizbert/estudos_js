const axios = require('axios')

const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'

axios.get(url).then(r => {
  const funcionarios = r.data

  const mulheres = f => f.genero === 'F'
  const chinesas = f => f.pais === 'China'

  const menorSalario = (func, funcAtual) => {
    return func.salario < funcAtual.salario ? func : funcAtual
  }

  const func = funcionarios
    .filter(mulheres)
    .filter(chinesas)
    .filter(menorSalario)

  console.log(func)
  console.log(`${Object.keys(func).length} mulheres chinesas`)
})
