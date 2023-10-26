// Operações IO-Bound (Input/Output)
// Operações CPU-Bound
// Módulo fs file system
// inferno de callbacks (callback hell)

const fs = require ('fs')

//definir uma função que lê o arquivo 

const abrirArquivo = function(nomeArquivo) {
    //1. definir uma função que será chamada quando a leitura do arquivo terminar
    // essa é uma função callback, pois nós a definimos, mas nunca chamamos, ela é chamada automaticamente pelo ambiente quando algo de interrese (um evento) acontece
    const exibirConteudo = function(erro, conteudo) {
        //verifica se tem erro, se tiver, só exibe e acaba, se não tiver, mostra o conteúdo
        if(erro) {
            console.log("Erro: " + erro)
        } else{
            console.log(`Conteúdo lido: ${conteudo.toString()}`)
            // calcular o dobro do valor lido
            //+conteudo.toString() ou Number(conteudo.toString())
            const dobro = Number(conteudo.toString()) * 2

            //escrever uma função que vai ser executada depois de o dobro ter sido escrito no novo arquivo
            //nome: finalizar
            //parâmetro: somente o erro
            const finalizar = function(erro) {
                console.log(`${erro ? "Deu erro ao salvar o dobro" : "Salvou o dobro com sucesso"}`)
            }
            // chamar uma função que escreve o dobro num novo arquivo e chama a função definida anteriormente
            //fs.writeFile
            //parâmetro: nome do arquivo novo (dobro.txt, conteúdo a ser escrito (dobro), a função finalizar)
            fs.writeFile("dobro.txt", dobro.toString(), finalizar)
        }
    }
    //2. usar o módulo fs para iniciar a leitura do arquivo
    fs.readFile(nomeArquivo, exibirConteudo)
}
// chamar essa função, entregando a ela o nome do arquivo que ela deve abrir
abrirArquivo("arquivo.txt")

//se tentar debugar esse código, é difícil, não é algo sequencial
// é muito difícil inspecionar esse código, por isso inferno de callbacks
//código hadouken