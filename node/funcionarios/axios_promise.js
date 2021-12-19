const axios = require('axios')

const URL_FUNCIONARIOS = 'http://files.cod3r.com.br/curso-js/funcionarios.json'

axios.get(URL_FUNCIONARIOS).then(response => {
  const china = f => f.pais === 'China'
  const mulher = f => f.genero === 'F'
  const menorSalario = (funcAnterior, funcAtual) =>
    funcAnterior.salario > funcAtual.salario
      ? (funcAnterior = funcAtual)
      : funcAnterior

  const func = response.data.filter(china).filter(mulher).reduce(menorSalario)

  console.log(func)
})
