// Closure é o escopo criado quando uma função é declarada 
// Esse escopo permite a função acessar e manipular variáveis externas à função

const x = 'global'


const minhaFuncao = () => {
    const x = 'local'
    return x
}

console.log(minhaFuncao())