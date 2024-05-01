function retornaFuncao(nom){
    const nome='Ste'
    return function(){
        return nome
    }
}

const funcao= retornaFuncao('Luiz')
const funcao2=retornaFuncao('João')
//console.log(funcao)
console.dir(funcao)
console.dir(funcao2)

console.log(funcao(),funcao2())