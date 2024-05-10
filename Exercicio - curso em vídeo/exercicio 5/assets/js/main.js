let vetor=[]

function addNum(){
    let num=document.getElementById('num')
    let numValor=num.value

    if(verificanum(numValor)){
        addListaNum(numValor)
        vetor.push(parseFloat(numValor))
        num.value=''
    }
}

function verificanum(num){
    if(num<0 || num>100 || num.length==0 || verificaLista(num)){
        alert('Digite um número válido.')
        return false
    }
    return true
}

function verificaLista(num){
    for(valor of vetor){
        if(valor==num){
            return true
        }
    }
}

function addListaNum(num){
    let lista=document.getElementById('sel')
    lista.style.display='inline-flex'

    let item=document.createElement('option')
    item.text=`Valor ${num} adicionado.` 
    lista.appendChild(item)
}

function finalizar(){
    let tamanho=vetor.length

    const verificaVetor=(tamanho)=>tamanho>0 ? true : false

    if(verificaVetor(tamanho)){
        let tamanhoTexto=`Ao todo, temos ${tamanho} números cadastrados.`
        criarParagrafo(tamanhoTexto)

        let maior=vetor.reduce((acumulador,vetor)=>vetor>acumulador ? vetor : acumulador,0)
        let maiorTexto=`O maior valor informado foi ${maior}.`
        criarParagrafo(maiorTexto)

        let menor=vetor.reduce((acumulador,vetor)=>acumulador>vetor ? vetor : acumulador)
        let menorTexto=`O menor valor informado foi ${menor}`
        criarParagrafo(menorTexto)

        let soma=vetor.reduce((acumulador,vetor)=>acumulador=acumulador+vetor,0)
        let somaTexto=`Somando todos os valores, temos ${soma}.`
        criarParagrafo(somaTexto)

        let media=(soma/tamanho)
        let mediaTexto=`A média dos valores digitados é ${media}.`
        criarParagrafo(mediaTexto)
    }else{
        alert('Por favor adicione um número.')
    }
}


function criarParagrafo(texto){
    let div=document.getElementById('finalizar')
    let add=document.createElement('p')
    add.textContent=texto
    div.appendChild(add)
}