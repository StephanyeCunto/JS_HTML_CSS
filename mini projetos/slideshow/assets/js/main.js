let i=0

function comecar(sinal){
    realizaOperação(sinal)
    acionarBtn()

    const images=new CriaImg(i,`assets/img/capivara ${i}.jpg`)
    addImg(images.url)
}

function realizaOperação(sinal){
    if(sinal=='+'){
        if(i==13){
            i=1
        }else{
            i++
        }
    }else if(sinal=='-'){
        if(i==1){
            i=13
        }else{
            i--
        }
    }
}

function acionarBtn(){
    const next=document.getElementById('next')
    const previous=document.getElementById('previous')

    next.style.display='block'
    previous.style.display='block'
}

function CriaImg(id,url){
    this.id=id
    this.url=url
}

function addImg(url){
    const div=document.querySelector('.container-items')
    verificaFilho(div)
    div.appendChild(criaImg(url))
}

function verificaFilho(div){
    while(div.childElementCount!=0){
        div.removeChild(div.firstChild)
    }
}

function criaImg(url){
    const img=document.createElement('img')
    img.setAttribute('src',url)
    return img
}