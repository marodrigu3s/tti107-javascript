//npm init -y
//npm install axios 

require('dotenv').config()
const axios = require('axios')

// const APPID = process.env.APPID
// const Q = process.env.Q
// const UNITS = process.env.UNITS
// const LANGUAGE = process.env.LANGUAGE
// const CNT = process.env.CNT
// const PROTOCOL = process.env.PROTOCOL
// const URL_BASE = process.env.URL_BASE

// operador de desestruturação - parêmetros dentro de chaves
const {
    APPID,
    Q,
    UNITS,
    LANGUAGE,
    CNT,
    PROTOCOL,
    URL_BASE
} = process.env

//https://api.openweathermap.org/data/2.5/forecast?q=Itu&units=metrix&appid=chave&lang=pt-br&cnt=10

const url = `${PROTOCOL}://${URL_BASE}?q=${Q}&units=${UNITS}&appid=${APPID}&lang=${LANGUAGE}&cnt=${CNT}`

const minhaPromise = axios.get(url)

minhaPromise
.then((res) => {
    console.log("Quem é o res.data?") 
    console.log(res.data)
    console.log("*********************************")
    return res.data
})
.then((res) => {
    console.log("Quem é o cnt?")
    console.log(res.cnt)
    console.log("*********************************")
    return res
})
.then((res) => {
    console.log("Quem é o list?")
    console.log(res.list)
    console.log("*********************************")
    return res.list
})
.then((res) => {
    console.log("Qual a temperatura mínima da primeira previsão de tempo?")
    console.log(res[0]['main']['temp_min'])
    console.log("*********************************")
    return res[0]['main']['temp_min']
})
.then((res) => {
    //iterar sobre a coleção de previsões, exibindo temperatura mínima, máxima, umidade relativa do ar, descrição de cada previsão
    //for ...
})