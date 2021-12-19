function Pessoa(nomeCompleto){

    // metodo público
    this.falar = function(){
        return console.log(`Meu nome é ${nomeCompleto}`)
    }
}

const carlos = new Pessoa('Carlos Augusto Gizbert')
carlos.falar();