/*console.log('Linha 0')
console.log('Linha 1')
console.log('Linha 2')
console.log('Linha 3')
console.log('Linha 4')
console.log('Linha 5')*/

for(let i=0;i<=5;i++){
   // console.log('Linha',i)
   console.log(`Linha ${i}`)
}

for(let i=-200;i<=500;i=i+100){
    // console.log('Linha',i)
    console.log(`Linha ${i}`)
}

 for(let i=100;i>=5;i=i-10){
    // console.log('Linha',i)
    console.log(`Linha ${i}`)
}

 for(let i=0;i<=5;i++){
    const par=i%2===0 ? 'par':'ímpar'
    console.log(`Linha ${i}, ${par}`)
}

const frutas=['Maçã','Pêra','Uva']
for(let i=0; i<frutas.length;i++){
    console.log(frutas[i])
}