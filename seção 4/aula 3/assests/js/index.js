// return
// Retorna um valor
// Termina a função

/*function soma(a,b){
    return a+b
}

function soma2(a,b){
    console.log(a +b)
}*/

//let s1=soma(2,5)

/*document.addEventListener('click',function(){
    document.body.style.backgroundColor='red'
})*/

/*const p1= criaPessoa('Ste','Cunto')
const p2={
    nome:'Ste',
    sobrenome:'Cunto'
}

function criaPessoa(nome, sobrenome){
    return {nome,sobrenome}
}

console.log(typeof p1, p1)
console.log(typeof p2, p2)*/

/*function falaFrase(comeco){
    function falaResto(resto){
        return comeco+' '+resto
    }

    return falaResto
}

const olaMundo= falaFrase('Olá')
console.log(olaMundo('Mundo!'))*/

/*function duplica(n){
    return n*2
}

function triplica(n){
    return n*3
}

function quadriplica(n){
    return n*4
}*/

function criaMultiplicador(multiplicador){
    //multiplicador
    return function multiplicacao(n){
        return n*multiplicador
    }
}

const duplica=criaMultiplicador(2)
const triplica=criaMultiplicador(3)
const quadriplica=criaMultiplicador(4)

console.log(duplica(2))
console.log(triplica(2))
console.log(quadriplica(2))

