// Factory function (Função fabrica)
// Construtor function (Função construtora)
function criaPessoa(nome,sobrenome,altura,peso){
    return{nome,
        sobrenome,
        // Getter
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`
        },
        // Setter
        set nomeCompleto(valor){
            valor=valor.split(" ")
            this.nome = valor.shift()
            this.sobrenome = valor.join(' ')
        },
        fala(assunto){
            return `${nome} está falando ${assunto}`
        },
        altura,
        peso,
        // Getter
        get imc(){
            return(peso/(altura**2)).toFixed(2)
        }
    }
 
}

const p1=criaPessoa("Ste","Cunto",1.63,39)
const p2=criaPessoa('Luiz','Otávio',1.80,80)
/*console.log(p1)
console.log(p1.fala("sobre JS"),p1.imc)
console.log(p2)
console.log(p2.fala("sobre PHP"),p2.imc)*/
p1.nomeCompleto='Luiz Otávio Miranda'
console.log(p1.nomeCompleto)
