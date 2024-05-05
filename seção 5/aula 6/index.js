//const numeros=[5,50,80,1,2,3,5,8,7,11,15,22,27]

/*const total=numeros.reduce((acumulador,valor,indice,arraw)=>acumulador+=valor,0)
*/

//const total=numeros.reduce((acumulador,valor)=>(valor%2===0 ? acumulador+=valor : acumulador),0)

/*const total=numeros.reduce((acumulador,valor)=>{
    if(valor%2===0){
        acumulador.push(valor)
    } 
    return acumulador
},[])
console.log(total)*/

const pessoas=[
    {nome:'Luiz',idade:62},
    {nome:'Maria', idade:23},
    {nome:'Eduardo',idade:55},
    {nome:'Léticia',idade:19},
    {nome:'Rosana',idade:64},
    {nome:'Wallace',idade:47},
]

const maisVelha=pessoas.reduce((acumulador,valor)=>valor.idade<acumulador.idade ? acumulador : valor,0)
console.log(maisVelha)

