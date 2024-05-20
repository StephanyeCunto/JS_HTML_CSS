function contar(){
    let inicio=parseFloat((document.getElementById('txti')).value)
    let fim=parseFloat((document.getElementById('txtf')).value)
    let passo=parseFloat((document.getElementById('txtp')).value)

    if(verificaDados(inicio,fim,passo)){
        if(passo<=0){
            contando(inicio,fim,1)
        }else{
            contando(inicio,fim,passo)
        }
    }
}

function verificaDados(inicio,fim,passo){
    if(inicio.length==0 || fim.length==0){
        alert('[Erro] Faltam dados!')
        return false
    }
    if(passo<=0){
        alert('Campo passo inválido, considerado passo 1.')
    }
    return true
}

function contando(inicio,fim,passo){
    var resultado=document.getElementById('resultado')
    resultado.innerText=""

    if(inicio<fim){
        for(let i=inicio;i<=fim;i=i+passo){
            resultado.innerText+=` \u{1F449} ${i}`
        }
    }else if(fim<inicio){
        for(let i=inicio;i>=fim;i=i-passo){
            resultado.innerText+=` \u{1F449} ${i}`
        }
    }else{
        resultado.innerText+=` \u{1F449} ${inicio}`
    }

    resultado.innerText+=` \u{1F3C1}`
}