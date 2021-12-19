const quaseArray = {
    0: 'Rafael', 
    1: 'Ana',
    2: 'Bia'
}
console.log(quaseArray)

Object.defineProperties(quaseArray, 'toString', {
    value: function(){
        return Object.values(this)
    },
    enumerable: false
})
console.log(quaseArray[0])


const meuArrayReal = ['Rafael', 'Ana', 'Bia']
console.log(quaseArray.toString(), meuArrayReal)