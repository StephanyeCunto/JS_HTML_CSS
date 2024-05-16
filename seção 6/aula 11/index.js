const falar={
    falar(){
        console.log(`${this.nome} está falando.`)
    } 
}

const comer={
    comer(){
        console.log(`${this.nome} está comendo.`)
    }
}

const beber={
    beber(){
        console.log(`${this.nome} está bebendo.`)
    }
}

// composição // mixer
//const pessoaPrototype={...falar,...comer,...beber}
const pessoaPrototype= Object.assign({},falar,comer,beber)

// função fábrica
function criaPessoa(nome,sobrenome){
    return Object.create(pessoaPrototype,{
        nome:{value:nome},
        sobrenome:{value:sobrenome}
    })
}

const p1= criaPessoa('Luiz','Otávio')
console.log(p1)

const p2 = criaPessoa ('Maria', 'Silva')