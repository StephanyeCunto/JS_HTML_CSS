/*
//Arraw literal
const nomes= ['Eduardo','Maria','Joana']

nomes[2]='João'
console.log(nomes)

delete nomes[2]
console.log(nomes)*/

// Valor por referência

/*const nomes= new Array('Eduardo','Maria','Joana')
const novo= nomes
const removido=novo.pop()
const removido2=novo.shift()
novo.push('João')
novo.push('Wallace')
novo.unshift('Otávio')
console.log(nomes)

const novo2=[...nomes]
novo2.pop()
console.log(novo)
console.log(novo2)
console.log(novo2.length)
console.log(removido)
console.log(removido2)

const novo3=novo2.slice(0,-1)
console.log(novo3)

const novo4=novo2.slice(-1,4)
console.log(novo4)*/

const nome='Luiz Otávio Miranda'
//const nomeIntermediario=nome.replaceAll(" ","")
//const nomes= nomeIntermediario.split('')
const nomes=nome.split(" ")
console.log(nomes)

const nome2=[ 'Luiz', 'Otávio', 'Miranda' ]
const nome3=nome2.join(" ")
console.log(nome3)