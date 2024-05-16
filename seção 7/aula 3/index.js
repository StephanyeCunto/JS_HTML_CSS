class DispositivoEletronico{
    constructor(nome){
        this.nome=nome
        this.ligado=false
    }

    ligar(){
        if(this.ligado){
            console.log(`${this.nome} já ligado.`)
            return
        } 
        this.ligado=true
    }

    deslisgar(){
        if(this.ligado){
            this.ligado=false
            return
        }
        console.log(`${this.nome} já desligado.`)
    }
}

class Smartphone extends DispositivoEletronico{
    constructor(nome,cor,modelo){
        super(nome)
        this.cor=cor
        this.modelo=modelo
    }
}

class Tablet extends DispositivoEletronico{
    constructor(nome,temWifi){
        super(nome)
        this.temWifi=temWifi
    }

    ligar(){
        console.log('Você alterou o método ligar')
    }
    
    falaOi(){
        console.log('oi')
    }
}

const s1= new Smartphone('Samsung','Preto','Galaxy s10')
s1.ligar()
console.log(s1)

const t1= new Tablet('Ipad', true)
t1.falaOi()