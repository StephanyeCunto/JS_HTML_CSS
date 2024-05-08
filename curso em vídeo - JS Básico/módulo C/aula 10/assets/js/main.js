var a=document.getElementById('area')
a.addEventListener('click',clicar)
a.addEventListener('mouseenter',entrar)
a.addEventListener('mouseout',sair)

function clicar(){
    a.innerHTML='Clicou!'
    a.style.background='red'
}

function entrar(){
    a.innerHTML='Entrou!'
}

function sair(){
    a.innerHTML='Saiu!'
    a.style.background='green'
}

function somar(){
    var tn1=document.getElementById('txtn1')
    var tn2=document.getElementById('txtn2')

    const soma=parseFloat(tn1.value)+parseFloat(tn2.value)

    const p=document.getElementById('resultado')
    p.innerHTML=`A soma é ${soma}`
}