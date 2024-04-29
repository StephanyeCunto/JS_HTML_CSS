/*const h1= document.querySelector('.container h1')
const data=new Date()
h1.innerHTML=criaData(data)

function getDiaSemana(data){
    const dia= data.getDay()
    let diaSemana

    switch(dia){
        case 0:
            diaSemana='comingo'
            return diaSemana
        case 1:
            diaSemana='segunda-feira'
            return diaSemana
        case 2:
            diaSemana='terça-feira'
            return diaSemana
        case 3:
            diaSemana='quarta-feira'
            return diaSemana
        case 4:
            diaSemana='quinta-feira'
            return diaSemana
        case 5:
            diaSemana='sexta-feira'
            return diaSemana
        case 6:
            diaSemana='sábado'
            return diaSemana
        default:
            diaSemana=' '
            return diaSemana
    }
}

function getMes(data){
    const mes=data.getMonth()
    let nomeMes

    switch(mes){
        case 0:
            nomeMes='janeiro'
            return nomeMes
        case 1:
            nomeMes='fevereiro'
            return nomeMes
        case 2:
            nomeMes='março'
            return nomeMes
        case 3:
            nomeMes='abril'
            return nomeMes
        case 4:
            nomeMes='maio'
            return nomeMes
        case 5:
            nomeMes='junho'
            return nomeMes
        case 6:
            nomeMes='julho'
            return nomeMes
        case 7:
            nomeMes='agosto'
            return nomeMes
        case 8:
            nomeMes='setembro'
            return nomeMes
        case 9:
            nomeMes='outubro'
            return nomeMes
        case 10:
            nomeMes='novembro'
            return nomeMes
        case 11:
            nomeMes='dezembro'
            return nomeMes
        default:
            nomeMes= ' '
            return nomeMes
    }
}

function zeroEsquerda(num){
    return num>= 10?num :`0${num}`
}

function criaData(data){
    const dia= zeroEsquerda(data.getDay())
    const ano=data.getFullYear()
    const hora=zeroEsquerda(data.getHours())
    const minutos=zeroEsquerda(data.getMinutes())
    const diaSemana=getDiaSemana(data)
    const mes=getMes(data)

    return (`${diaSemana}, ${dia} , ${mes}` + ` de ${ano} ${hora}:${minutos}`)
}*/

/*
const h1= document.querySelector('.container h1')
const data=new Date()
/*
const opcoes= {
    dateStyle :'full',
    timeStyle: 'short'
}
h1.innerHTML=data.toLocaleString('pt-BR',opcoes)
*//*
h1.innerHTML=data.toLocaleString('pt-BR', {dateStyle :'full',timeStyle: 'short'})
*/

const h1= document.querySelector('.container h1')
const data=new Date()
h1.innerHTML=criaData(data)

function getDiaSemana(data){
    const dia= data.getDay()
   const diaSemana=['domingo','segunda-feira','terça-feira','quarta-feira','quinta-feira','sexta-feira','sábado']
   return diaSemana[dia]
}

function getMes(data){
    const mes=data.getMonth()
    const meses=['janeiro','fevereiro','março','abril','junho','julho','agosto','setembro','outubro','novembro','dezembro']
    return meses[mes]
}

function zeroEsquerda(num){
    return num>= 10?num :`0${num}`
}

function criaData(data){
    const dia= zeroEsquerda(data.getDay())
    const ano=data.getFullYear()
    const hora=zeroEsquerda(data.getHours())
    const minutos=zeroEsquerda(data.getMinutes())
    const diaSemana=getDiaSemana(data)
    const mes=getMes(data)

    return (`${diaSemana}, ${dia} , ${mes}` + ` de ${ano} ${hora}:${minutos}`)
}
