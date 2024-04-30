// Declaração de função (Function hoisting)
falaOi()

function falaOi(){
    console.log('Oie')
}

// First-class objects (Objetos de primeira classe)
// Function expression

const souUmDado = function nomeDaFuncao(){
    console.log('Sou um dado')
}

const souUmDado2 = function(){
    console.log('Sou um dado')
}


souUmDado()

function executaFuncao(funcao){
    console.log('Vou executar sua função abaixo:')
    funcao()
}

executaFuncao(souUmDado)

// Arrow function
const funcaoArrow = () =>{
    console.log('Sou um arrow function')
}

funcaoArrow()

/*setInterval(function(){

},1000)

setInterval(funcao(),1000)*/

// Dentro de um objeto
/*const obj={
    falar: function(){
        console.log('Estou falando...')
    }
}*/
const obj={
    falar(){
        console.log('Estou falando...')
    }
}
obj.falar()