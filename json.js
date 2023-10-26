// Objetos Javascript (ou "JSON" Javascript Object Notation)

// uma pessoa se chama João e tem 17 anos
let pessoa = {
    nome: "João",
    idade: 17
}

// operadores de acesso a membro: . ou [""]
console.log("O nome da pessoa é " + pessoa.nome)
console.log("Ele tem " + pessoa["idade"] + " anos")

// Uma pessoa se chama Maria, em 21 anos e mora na rua B, numero 121

let pessoa2 = {
    nome: "Maria",
    idade: 21,
    endereco: {
        rua: "B",
        numero: 121
    }
}

console.log("Meu nome é " + pessoa2.nome + ", tenho " + pessoa2.idade + " anos, moro na rua " + pessoa2.endereco.rua + " - número " + pessoa2.endereco.numero + ".")

// Uma concessionária tem CNPJ e endereço (rua, número e bairro). Ela possui 3 carros em estoque, cada um deles tem marca, modelo e ano de fabricação).

let concessionaria = {
    cnpj: "XX.XXX.XXX/0001-XX",
    endereco: {
        rua: "Rua dos Carros",
        numero: 23,
        bairro: "Jardins"
    },
    veiculos: [{
        marca: "Fiat",
        modelo: "Uno",
        anoDeFabricacao: 2014
    },
    {
        marca: "Chevrolet",
        modelo: "Cruze",
        anoDeFabricacao: 2018
    },
    {
        marca: "Peugeot",
        modelo: "2008",
        anoDeFabricacao: 2020
    }]
}

console.log(concessionaria.veiculos[0].modelo)

// estrutura de repetição para mostrar todas as marcas e modelos 

for (let veiculo of concessionaria.veiculos) {
    console.log(`Marca: ${veiculo.marca}`);
    console.log(`Modelo: ${veiculo.modelo}`);
    console.log(`Ano de Fabricação: ${veiculo.anoDeFabricacao}`);

}