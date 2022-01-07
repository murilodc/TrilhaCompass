const cliente = {
    nome: "Andre",
    idade: 36,
    cpf: "45698712345",
    email: "alo@gmail.com"
}

const chaves = ['nome', 'idade', 'cpf', 'email']

// console.log(cliente[chaves[0]])

chaves.forEach(chave => {
    console.log(cliente[chave])
});