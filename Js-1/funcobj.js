const cliente = {
    nome: "Andre",
    idade: 36,
    cpf: "45698712345",
    email: "alo@gmail.com",
    fones: ['49583214', '5535261154'],
    dependentes: [{    
        nome: "Sara",
        parentesco: "filha",
        dataNasc: "20/03/2011"}],
    saldo: 100,
    depositar:function(valor){
        this.saldo += valor
    }
}
cliente.dependentes.push({
    nome:"Samia Maria",
    parentesco:"Tia",
    dataNasc:"04/01/1999"
})

cliente.depositar(30)

console.log(cliente.saldo)