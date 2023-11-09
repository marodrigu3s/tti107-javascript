// async function hello(nome) {
//     return "Oi, " + nome
// }
// const boasVindas = hello("João")
// console.log(boasVindas)
// boasVindas.then((res) => console.log(res))

// function fatorial(n) {
//     if (n < 0)
//         return Promise.reject(`Valor não pode ser negativo (${n})`)
//     let res = 1
//     for (let i = 2; i <= n; i++)
//         res *= i
//     return Promise.resolve(res)
// }

// const chamadaComThenECatch = () => {
//     fatorial(10)
//     .then(res => console.log(`Deu certo: 10! = ${res}`))
//     .catch(err => console.log(`Falhou: ${err}`))

//     fatorial(-1)
//     .then(res => console.log(`Deu certo: 10! = ${res}`))
//     .catch(err => console.log(`Falhou: ${err}`))
// }

const chamadaComAsyncAwait = async () => {
    try{
        const res = await fatorial(10)
        console.log(`Deu certo: 10! = ${res}`)
    }
    catch(err) {
        console.log(`Falhou: ${err}`)
    }
    try{
        const res2 = await fatorial(-1)
        console.log(`Deu certo: -1! = ${res2}`)
    }
    catch(err) {
        console.log(`Falhou: ${err}`)
    }
}