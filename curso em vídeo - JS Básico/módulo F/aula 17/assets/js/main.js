//let num=[1,2,3,4,5]

let amigo={
    nome:'José',
    sexo:'M',
    peso: 85.4,
    engordar(p){
        this.peso+=p
    }
}

console.log(`${amigo.nome} pesa ${amigo.peso} kg.`)
amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso} kg.`)