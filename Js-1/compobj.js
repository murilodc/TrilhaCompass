const cliente = {
    nome: "Andre",
    idade: 36,
    cpf: "45698712345",
    email: "alo@gmail.com",
    fones: ['49583214', '5535261154'],
    dependentes: [{    
        nome: "Sara",
        parentesco: "filha",
        dataNasc: "20/03/2011"}]
}
cliente.dependentes.push({
    nome:"Samia Maria",
    parentesco:"Tia",
    dataNasc:"04/01/1999"
})

console.log(cliente)

const filhaMaisNova = cliente.dependentes.filter(dependente => dependente.dataNasc==='20/03/2011')

console.log(filhaMaisNova[0].nome)