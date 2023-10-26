// Exemplo não bloqueante

// function demorada() {
//     //extrair a data atual do sistema e deslocar de 2 segundos 
//     const dataAtualMais2Segundos = new Date().getTime() + 2000 // 2 mil milisegundos
//     // ficar extraindo a data atual do sistema até que ela tenha passado da original
//     while (new Date().getTime() <= dataAtualMais2Segundos){
    
//     }
//     const d = 8 + 4
//     return d
// }

// const a = 2 + 3
// const b = 5 + 9

// setTimeout(() => {
//     const d = demorada()
//     console.log("d: " + d)
// }, 500)

// const e = 2 + a + b
// console.log("e: " + e)


// setTimeout(() => {
//     console.log("Dentro da setTimeOut")
// }, 0)
// console.log("Depois da setTimeOut")

// function demorada(tempo) {
//     console.log(`demorada: ${tempo}`)
//     const atualMaisTempo = new Date().getTime() + tempo
//     while(new Date().getTime() <= atualMaisTempo) {

//     }   
//     const d = 8 + 4
//     return d 
// }

// setTimeout(() => {
//     demorada(2000)
// }, 2000)
// setTimeout(() => {
//     demorada(1000)
// }, 1000)

// console.log("Fim do script principal")

console.log("Script principal começou...")
setTimeout(() => {
    console.log("Dentro da timeout")
}, 0)
const atualMaisTempo = new Date().getTime() + 5000
while (new Date().getTime() <= atualMaisTempo); //";" é a operação NO-OP
console.log("Script principal terminou.")