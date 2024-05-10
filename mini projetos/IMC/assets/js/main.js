function recebeDados(){
    const nome=document.getElementById('nome').value
    const altura=document.getElementById('altura').value
    const peso=document.getElementById('peso').value

    if(verificaDados(nome,altura,peso)){
        const imc=calculaIMC(altura,peso)
        exibirMsg(nome,imc)
    }
}

function verificaDados(nome,altura,peso){
    if(nome.length==0 || altura.length==0 || peso.length==0){
        alert('Por favor informe seus dados!')
        return false
    }
    return true
}

function calculaIMC(altura,peso){
    const imc=peso/(altura**2)
    return imc.toFixed(2)
}

function exibirMsg(nome,imc){
    const div=document.getElementById('resultado')
    const section=document.getElementById('sectionResultado')
    const resultado=document.createElement('p')
    const situaçãoResultado=situação(imc)
    resultado.textContent=`${nome} seu IMC é ${imc} e você está ${situaçãoResultado}.`

    section.style.display='block'
    div.style.display='flex'
    div.appendChild(resultado)
}

function situação(imc){
    if(imc<16.9){
        return 'muito abaixo do peso'
    }
    if(imc<18.4){
        return 'abaixo do peso'
    }
    if(imc<24.9){
        return 'peso normal'
    }
    if(imc<29.9){
        return 'acima do peso'
    }
    if(imc<34.9){
        return 'obesidade grau I'
    }
    if(imc<40){
        return 'obesidade grau II'
    }
    return 'obesidade grau III'
}
