// Literal string ' '  " " ` `
// Literal array [ ]
// literal número 1236
// Literal função function

/*const pessoa={
    nome: 'Luiz',
    sobrenome: 'Otávio'
}

//console.log(pessoa.nome)
//console.log(pessoa.sobrenome)

const chave='nome'
console.log(pessoa[chave])
console.log(pessoa['sobrenome'])*/

//new Array()
const pessoa1=new Object()
pessoa1.nome='Luiz'
pessoa1.sobrenome='Otávio'
pessoa1.idade= 30

//console.log(pessoa1.nome)
//console.log(pessoa1.sobrenome)
//console.log(pessoa1)
//delete pessoa1.nome
//console.log(pessoa1)

/*pessoa1.falarNome=function(){
    return(`${this.nome} está falando seu nome.`)
}

pessoa1.getDataNascimento= function(){
    const dataAtual=new Date()
    return dataAtual.getFullYear()-this.idade
}

//console.log(pessoa1.getDataNascimento())

for(let chave in pessoa1){
    console.log(pessoa1[chave])
}*/

// Factory functions / Constructor functions / Class

/*function criaPessoa(nome,sobrenome){
    return {
        nome,
        sobrenome,
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`
        }
    }
}

const p1= criaPessoa('Luiz','Otávio')
console.log(p1.nomeCompleto)*/

function Pessoa(nome,sobrenome){
    this.nome=nome
    this.sobrenome=sobrenome    
}// return this // {nome: 'Luiz',sobrenome:'Otávio'}

// {} <- this
//const p2={}
//p2.nome='Luiz'

const p1 = new Pessoa('Luiz','Otávio')
const p2 = new Pessoa('Maria','Miranda')
//p1 = edereço de memória -> "Valor"
//p1 = outra coisa erro

Object.freeze(p1)
Object.freeze(this) // não funciona
p1.nome='Outra coisa'
p2.nome='QLQ'
delete p2.sobrenome

console.log(p1)
console.log(p2)
