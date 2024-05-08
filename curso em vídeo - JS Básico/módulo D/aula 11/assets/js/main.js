//console.log('O console funcionou corretamente')

/*var vel=60.5
console.log(`A velocidade do seu carro é ${vel} km/h`)
console.log("Dirija sempre usando cinto de segurança.")

if(vel> 60){ //condição simples
    console.log('Você ultrapassou a velocidade permitida. MULTADO!!')
}

var país='EUA'
console.log(`Vivendo em ${país} .`)

if(país == "Brasil"){
    console.log('Você é brasileiro.')
}else{
    console.log('Você é extrangeiro.')
}*/

function calcular(){
    const vel=document.getElementById('txtvel')
    const p=document.getElementById('resultado')

    if(parseFloat(vel.value)>60){
        p.innerHTML="Você ultrapassou a velocidade permitida. MULTADO!!"
    }else{
        p.innerHTML="Você está na velocidade permitida."
    }

}