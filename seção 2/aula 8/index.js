const nome='Stephanye'
const sobrenome='Cunto'
const idade=19
const peso=39
const altura= 1.63
let imc // peso/(altura*altura)
let anoNascimento

imc=peso/(altura*altura)
anoNascimento=2024-idade

console.log(nome,'tem',idade,'anos, pesa',peso,'kg, tem',altura,'metros de altura e seu IMC é de',imc)
console.log(nome,'nasceu em',anoNascimento, '.')

console.log(nome+ ' '+sobrenome+' '+'tem '+idade+' anos, pesa '+peso+' kg')
console.log(nome,'nasceu em', anoNascimento, '.')

console.log(`${nome} ${sobrenome}, tem ${idade} anos, pesa ${peso} kg, tem ${altura} metros e seu IMC é ${imc}`)
console.log(`${nome}, nasceu em ${anoNascimento}.`)