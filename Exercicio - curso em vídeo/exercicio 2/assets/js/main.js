function verificar(){
    var data= new Date()
    var ano= data.getFullYear()

    var fano= document.getElementById('txtano')
    fano=parseInt(fano.value)

    if(verificarAno(fano,ano)){
        var idade=ano-fano

        selecionaImg(idade,sexo())
    }
}

function verificarAno(fano,ano){

    if(fano>ano){
        alert('[ERRO] Verifique o ano.') 
        return false
    }else if(fano<1900){
        alert('[ERRO] Verifique o ano.')
        return false
    }
    return true
} 

function sexo(){
    var fsexo= document.getElementsByName('radsex')
    if(fsexo[0].checked){
        return 'masculino'
    }
    if(fsexo[1].checked){
        return 'feminino'
    }
}

function selecionaImg(idade,sexo){
    var resultado= document.getElementById('resultado')
    var img= document.createElement('img')
    img.setAttribute('id', 'foto')

    if(sexo=='masculino'){
        if(idade>=0 && idade<10){
            img.setAttribute('src','assets/img/homem-bebe.png') 
            faixa='uma criança'       
        }else if (idade<50){
            img.setAttribute('src','assets/img/homem-adulto.png') 
            faixa='um adulto'
        }else{
            img.setAttribute('src','assets/img/homem-idoso.png') 
            faixa='um idoso'
        }
    }else if(sexo=='feminino'){
        if(idade>=0 && idade<10){
            img.setAttribute('src','assets/img/mulher-bebe.png') 
            faixa='uma criança'       
        }else if (idade<50){
            img.setAttribute('src','assets/img/mulher-adulto.png') 
            faixa='uma adulta'
        }else{
            img.setAttribute('src','assets/img/mulher-idoso.png') 
            faixa='uma idosa'
        }
    }
    resultado.innerHTML=`<h1>Detectamos ${faixa} ${sexo} com ${idade} anos<\h1>`     
    resultado.appendChild(img)
}



