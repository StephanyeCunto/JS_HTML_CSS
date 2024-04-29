const data =new Date(0)
const tresHoras=60*60*3*1000
const dataTresHoras = new Date(tresHoras)
const umDia= 60*60*24*1000
const dataUmDia=new Date(umDia)
const menosUmDia= new Date(tresHoras-umDia)

const data1=new Date(2019,3) // a ,m , d, h, M, s,ms
const data2=new Date('2019-04-20T20:20:59.90')

console.log('Dia: ', data2.getDate())
console.log('Mes: ', data2.getMonth())          // Mês começa no zero
console.log('Ano: ', data2.getFullYear())
console.log('Hora: ', data2.getHours())
console.log('Min: ',data2.getMinutes())
console.log('Seg: ',data2.getSeconds())
console.log('MS: ', data2.getMilliseconds())
console.log('Dia Semana: ',data.getDay())     // 0 - Domingo, 6 - Sábado

console.log(data2.toString())

const date= new Date(1714406608207)

console.log(Date.now())
console.log(date)

function zeroEsquerda (num){
    return num>=10 ? num : `0${num}`
}

function formataData(dataAtual){
    const dia=zeroEsquerda(dataAtual.getDate())
    const mes=zeroEsquerda(dataAtual.getMonth()+1)
    const ano=zeroEsquerda(dataAtual.getFullYear())
    const hora=zeroEsquerda(dataAtual.getHours())
    const min=zeroEsquerda(dataAtual.getMinutes())
    const seg=zeroEsquerda(dataAtual.getSeconds())

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`
}

const dataAtual= new Date()
const dataBrasil=formataData(dataAtual)
console.log(dataBrasil)