const nomes=['Maria','João','Eduardo','Gabriel','Júlia']

//nomes.splice(indice,delete, elem1,elem2,elem3)

const removidos=nomes.splice(1,2)
//const removidos=nome.splic(1,MAX_VALUE)
console.log(nomes)
console.log(removidos)
nomes.splice(1,0,'Luiz')
console.log(nomes)