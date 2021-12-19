// reduce percorre o array e soma os valores anteriores com os atuais
// reduce agrega valor ao proximo

const alunos = [
    { nome: 'joao', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Ana', nota: 8.7, bolsista: true}
]

const resultado = alunos.map(aluno => aluno.nota).reduce(function(acumulator, atual){
    console.log(acumulator, atual)
    return acumulator + atual
})