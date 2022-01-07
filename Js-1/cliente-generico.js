function Cliente(nome,cpf,email,saldo){
    this.nome = nome
    this.cpf = cpf
    this.email = email
    this.saldo = saldo
    this.depositar = function(valor){
        this.saldo += valor
    }
}

const andre = new Cliente("Andre", "123456789", "andre@email.com", 100)

function clientePoupanca(nome,cpf,email,saldo,saldoPoupanca){
    Cliente.call(this,nome,cpf,email,saldo)
    this.saldoPoupanca = saldoPoupanca
}

const ju = new clientePoupanca("Ju", "789456123", "juemail@hotmail.com", 100, 200)

console.log(ju)

clientePoupanca.prototype.depositarPoupanca= function(valor){
    this.saldoPoupanca += valor
}

ju.depositarPoupanca(30)

console.log(ju)