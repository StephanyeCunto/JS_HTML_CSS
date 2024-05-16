function teste(){
    console.log('Este é meu teste.')
}

class ControleRemoto{
    constructor(tv){
        this.tv=tv
        this.volume=0
        teste()
    }

    // Método de instância
    aumentarVolume(){
        this.volume+=2
    }

    // Método de instância
    diminuirVolume(){
        this.volume-=2
    }

    // Método estático
    static trocaPilha(){
        console.log('Ok, vou trocar.')
    }

    static soma(x,y){
        console.log(this)
        return x+y
    }
}

const controle1 = new ControleRemoto('lg')
controle1.aumentarVolume()
controle1.aumentarVolume()
controle1.aumentarVolume()
controle1.aumentarVolume()
console.log(controle1)

ControleRemoto.trocaPilha()

console.log(ControleRemoto.soma(2,4))