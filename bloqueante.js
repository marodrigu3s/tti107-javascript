// Computação síncrona (bloqueante) e assíncrona (não bloqueante)  

// console.log("Eu primeiro...")
// console.log("Agora eu...")
// console.log("Sempre vou ser a última :(")

// const a = 2 + 5
// const b = 5
// console.log(a + b) //nesse caso, o comportamento bloqueante é necessário para a execução da terceira linha 

// Exemplo bloqueante

function demorada() {
    //extrair a data atual do sistema e deslocar de 2 segundos 
    const dataAtualMais2Segundos = new Date().getTime() + 2000 // 2 mil milisegundos
    // ficar extraindo a data atual do sistema até que ela tenha passado da original
    while (new Date().getTime() <= dataAtualMais2Segundos){
    
    }
    const d = 8 + 4
    return d
}

const a = 2 + 3
const b = 5 + 9
const d = demorada()
const e = 2 + a + b //não depende da linha 24 para executar, mas espera ela executar (processamento bloqueante)
console.log(e)


