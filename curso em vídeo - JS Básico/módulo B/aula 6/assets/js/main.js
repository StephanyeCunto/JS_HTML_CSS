/*const nome=prompt('Qual seu nome?')
const paragrafo=document.querySelector(".nome")
paragrafo.innerHTML=`É um grande prazer te conhecer ${nome}!`*/

const num1=prompt("Digite um número: ")
const num2=prompt("Digite outro número: ")

//const soma=parseFloat(num1)+parseFloat(num2)
let soma=Number(num1)+Number(num2)
soma=soma.toLocaleString('pt-BR',{style:'currency',currency:'BRL'})

const paragrafo=document.querySelector(".nome")
paragrafo.innerHTML=`A soma de ${num1} e ${num2} é ${soma}.`
document.write(`${num1} + ${num2} = ${soma}`)