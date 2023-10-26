// Uma calculadora realiza:

// soma de dois números
 let calculadora = {
    soma: (a, b) => {return a + b},
 
// subtração de dois números
    subtracao: (a, b) => a - b, 
// raiz quadrada de um número
    raiz: function(a){return Math.sqrt(a)}
 }

console.log(calculadora.soma(3, 3))

// como somar sem utilizar o operador . 
// console.log(calculadora["soma"](2, 3))

console.log(calculadora.subtracao(7, 2))

console.log(calculadora.raiz(16));