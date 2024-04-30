const nome= ['Ste', 'Luiz', 'Otavio']

// for classico
for(let i=0; i<nome.length; i++){
    console.log(nome[i],` , `,i)
}

// for in
for(let i in nome){
    console.log(nome[i],`,`,i)
}

//for of
for(let valor of nome){
    console.log(valor)
}

nome.forEach(function(valor,indice,array){
    console.log(valor,indice,array)
})