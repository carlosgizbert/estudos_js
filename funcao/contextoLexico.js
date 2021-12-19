const valor = 'Global'

function minhaFuncao(){
    console.log(valor)
}

function exec(){
    const valor ='Local'
    // essa função "minhaFuncao()" foi declarada em outro local e carrega o contexto do local onde ela foi declarada
    minhaFuncao() 
}

exec()