// Filter, map , reduce

const numeros= [5,50,80,1,2,3,5,8,7,11,15,22,27]

/*function callbackFilter(valor,indice,arraw){
    if(valor>10){
        return true
    }
    return false
}*/

const numerosFiltrados= numeros.filter(valor=>valor>10)
console.log(numerosFiltrados)

const pessoas=[
    {nome:'Luiz',idade:62},
    {nome:'Maria', idade:23},
    {nome:'Eduardo',idade:55},
    {nome:'Léticia',idade:19},
    {nome:'Rosana',idade:32},
    {nome:'Wallace',idade:47},
]

/*for(valor of pessoas){
    console.log(valor.nome)
}*/

const pessoasFiltradasNomes = pessoas.filter((valor)=>valor.nome.length>=5)
console.log(pessoasFiltradasNomes)

const pessoasFiltradasIdades= pessoas.filter((valor)=>valor.idade>50)
console.log(pessoasFiltradasIdades)

const pessoasFiltradasNomesA= pessoas.filter((valor)=>valor.nome.toLowerCase().endsWith('a'))
console.log(pessoasFiltradasNomesA)
