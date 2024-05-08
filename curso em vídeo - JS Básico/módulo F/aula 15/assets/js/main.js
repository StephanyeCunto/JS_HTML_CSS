let num=[5,8,2,9,3]

num.push(1)
console.log(num)
console.log(num.sort())

console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)

for(let pos=0;pos<num.length;pos++){
    console.log(`A posição ${pos} tem valor ${num[pos]}, for clássico`)
}

for(valor in num){
    console.log(`A posição ${valor} tem valor ${num[valor]}, for in`)
}

for(valor of num){
    console.log(valor,'for of')
}

console.log(num.indexOf(8))
console.log(num.indexOf(7))