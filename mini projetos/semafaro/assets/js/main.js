function vermelho(){
    addImg('vermelho')
}

function amarelo(){                 
    addImg('amarelo')
}

function verde(){
    addImg('verde')
}

function automatico(){    
    const cor=['vermelho','amarelo','verde']
    let i=0

    setInterval(function(){
        addImg(cor[i])
        i=i+1
        if(i==3){
            i=0
        }
    },2000)
}

function addImg(sinal){
    const img=document.querySelector('img')
    img.removeAttribute('src')
    img.setAttribute('src',`assets/img/${sinal}.png`)
}