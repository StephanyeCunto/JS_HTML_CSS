function carregar(){
    var msg= document.getElementById('msg')
    var img= document.getElementById('imagem')
    var h=document.querySelector('h1')
    var body=document.body

    var data= new Date()
    const zero=(num)=>(num<10) ? `0${num}` : num
    var hora=zero(data.getHours())
    var minutos=zero(data.getMinutes())
    msg.innerHTML=`Agora são ${hora}:${minutos}`

    if(hora>=0 && hora<12){
        img.src='img/bom-dia.png'
        body.style.background='#e2cd9f'
        h.innerHTML='Bom dia'

    }else if(hora>=12 && hora<18){
        img.src='img/boa-tarde.png'
        body.style.background='#b9846f'
        h.innerHTML='Boa tarde'

    }else{
        img.src='img/boa-noite.png'
        body.style.background='#515154'
        h.innerHTML='Boa noite'
    }
}

