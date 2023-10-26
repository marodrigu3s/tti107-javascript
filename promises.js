// Promises

// 1 + 2 + 3 + ... + n-1 + n
// function calculoDemorado(numero) {
//     //executa em tempo linear em n: O(n)
//     const p = new Promise(function (resolve, reject) {
//         let res = 0
//         for (let i = 1; i <= numero; i++) res += i
//         resolve(res)
//     })
//     return p 
// }

// const promessa = calculoDemorado(10)
// promessa.then((valor) => {console.log("Valor calculado: " + valor)})
// console.log("Outras coisas... ")

// const resultado = calculoDemorado(10)
// console.log(resultado)
// console.log("Outras coisas... ")



// const calculoRapidinho = (numero) => {
//     return Promise.resolve(
//         (numero / 2) * (numero + 1)
//     )
// }
// calculoRapidinho(10).then(function(res){console.log(res)})



const calcular = (numero) => {
    //Desafio 1
    //se o usuário informar um número positivo, fazer como antes
    // if (numero >= 1){
    //     return Promise.resolve (
    //         (numero/2) * (numero+1)
    //     )
    // }
    //senão, ou seja, se ele informar um número negativo, devolver uma promise no estado rejected, com a mensagem "o número deve ser positivo"
    //return Promise.reject("O número deve ser positivo")

    //Desafio 2: refazer usando o operador ternário
    res = (numero >= 1 ? Promise.resolve((numero/2) * (numero +1)) : Promise.reject("O número deve ser positivo"))
    return res
}

calcular(10)
.then(res => console.log(res))
.catch(erro => console.log("Erro: " + erro))

