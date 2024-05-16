// Superclass

function Conta(agencia,conta,saldo){
    this.agencia = agencia
    this.conta = conta
    this.saldo = saldo
}

Conta.prototype.sacar = function(valor){
    if(this.saldo< valor){
        console.log(`Saldo insuficiente ||` + `Saldo: R$${this.saldo.toFixed(2)}`)
        return
    }

    this.saldo-=valor
    this.verSaldo()
}
Conta.prototype.depositar = function(valor){
    this.saldo+=valor
    this.verSaldo()
}
Conta.prototype.verSaldo = function(){
    console.log(`Ag/c: ${this.agencia}/${this.conta} ||` + `Saldo: R$${this.saldo.toFixed(2)}`)
}

/*const conta1 = new Conta(11,22,10)
conta1.depositar(11)
conta1.depositar(10)
conta1.sacar(30)
conta1.sacar(2)*/

function ContaCorrente(agencia,conta,saldo,limite){
    Conta.call(this,agencia,conta,saldo)
    this.limite=limite
}

ContaCorrente.prototype = Object.create(Conta.prototype)
ContaCorrente.prototype.constructor = ContaCorrente

ContaCorrente.prototype.sacar = function(valor){
    if(valor>this.saldo+this.limite){
        console.log(`Saldo insuficiente ||` + `Saldo: R$${this.saldo.toFixed(2)}`)
        return   
    }

    this.saldo-=valor
    this.verSaldo()
}

const contaCorrente1 = new ContaCorrente(11,22,0,100)
contaCorrente1.depositar(10)
contaCorrente1.sacar(110)
contaCorrente1.sacar(10)
console.log(' ')

function ContaPoupança(agencia,conta,saldo){
    Conta.call(this,agencia,conta,saldo)
}

ContaPoupança.prototype = Object.create(Conta.prototype)
ContaPoupança.prototype.constructor = ContaPoupança

const contaPoupança1= new ContaPoupança(12, 33, 0)
contaPoupança1.depositar(10)
contaPoupança1.sacar(110)
contaPoupança1.sacar(10)