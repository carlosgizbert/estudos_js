let comparaComThis = function (param) {
    console.log(this === param) //aqui o this é no escopo global
}

comparaComThis(global)