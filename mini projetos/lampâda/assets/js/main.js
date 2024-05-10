let i=0
function ligar(){
    trocaImg('ligar')
}

function desligar(){
    trocaImg('desligar')
}

function quebrar(){
    trocaImg('quebrar')
}


function trocaImg(função){
    const divImg=document.getElementById('divLampada')

    if(!lampadaQuebrada(função)){
        while(divImg.childElementCount!=0){
            apagaImg(divImg)
          }
        addImg(divImg,função)
    }
}

function lampadaQuebrada(função){
    if(função=='quebrar'){
        i=+1
        return false
    }
    if(i>0){
        return true
    }
    return false
}

function apagaImg(divImg){
    divImg.removeChild(divImg.firstChild)
}

function addImg(div,função){
    const img=document.createElement('img')

    if(função=='ligar'){
        img.setAttribute('src','assets\\img\\ligada.jpg')
    }else if(função=='desligar'){
        img.setAttribute('src','assets\\img\\desligada.jpg')
    }else{
        img.setAttribute('src','assets\\img\\quebrada.jpg')
        div.appendChild(img)
    }

    div.appendChild(img)
}
