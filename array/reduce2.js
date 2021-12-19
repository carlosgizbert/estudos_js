const alunos = [
  { nome: 'joao', nota: 7.3, bolsista: false },
  { nome: 'Maria', nota: 9.2, bolsista: true },
  { nome: 'Pedro', nota: 9.8, bolsista: false },
  { nome: 'Ana', nota: 8.7, bolsista: true }
]

// sem reduce

/* 
const contemBolsista = (aluno) => aluno.bolsista == true
let bolsistas = alunos.filter(contemBolsista)

// desafio 1: Todos os alunos são bolsistas?
desafio1 = () => bolsistas.length == alunos.length
console.log(desafio1())

// desafio 2: Algum aluno é bolsista?
desafio2 = () => bolsistas.length <= alunos.length
console.log(desafio2())
*/

// com reduce

// desafio 1
const todosBolsistas = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas))

// desafio 2
const algumBolsista = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(a => a.bolsista).reduce(algumBolsista))
