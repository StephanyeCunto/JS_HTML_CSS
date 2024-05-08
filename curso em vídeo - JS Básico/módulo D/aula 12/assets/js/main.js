/*var idade=22
if (idade<18){
    console.log('Menor de idade')
}else{
    console.log('Maior de idade')
}

if(idade<=16){
    console.log('Não vota')
}else if(idade>=18 && idade>=65){
    console.log('Voto obrigátorio')
}else{
    console.log('Voto opcional')
}*/

const data= new Date()
const hora=zero(data.getHours())
const min=zero(data.getMinutes())
const seg=zero(data.getSeconds())
const diaSem=(data.getDay())

function zero(num){
    return (num<10) ? `0${num}`: num
}
console.log(`Horas: ${hora}:${min}:${seg}, dia: ${diaSemana(diaSem)}`)

if(hora<12){
    console.log('Bom dia!')
}else if(hora<=18){
    console.log("Boa tarde!")
}else{
    console.log("Boa noitw!")
}

function diaSemana(diaSem){
    switch(diaSem){
        case 0:
            return `Domingo`
        case 1:
            return `Segunda`   
        case 2:
            return `Terça`
        case 3:
            return `Quarta`
        case 4:
            return `Quinta`
        case 5:
            return `Sexta`
        case 6:
            return `Sábado`
    }
}