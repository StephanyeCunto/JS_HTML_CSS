function geraTabulada(){
    let num = document.getElementById('txtn').value


    if(verificaNum(num)){
        tabulada(num)
    }
}

function verificaNum(num){
    if(num.length==0){
        alert('Por favor,digite um número!')
        return false
    }
    return true
}

function tabulada(num){
    let tab = document.getElementById('seltab')
    tab.style.display='inline-flex'

    for(let i=1;i<=10;i++){
        verificaExistenciaFilho(tab)

        let item = document.createElement('option')
        item.text= `${num} X ${i} = ${num*i}`
        tab.appendChild(item)
    }
}

function verificaExistenciaFilho(tab){
    if(tab.childElementCount>=10){
        tab.removeChild(tab.firstChild)
    }
}