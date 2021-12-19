// SpreadRest com atributos de objeto
const alunos = {
  id: 1,
  nome: 'carlos',
  idade: 21
}

const clone = { bolsista: true, ...alunos }

console.log(clone)

// SpreadRest com array
const grupoA = ['Sonia', 'Percival']
const grupoFinal = ['Maria', 'Joao', ...grupoA, 'Lula']
console.log(grupoFinal)
