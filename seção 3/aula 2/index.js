/**
 * Operadores Lógicos
 * &&-> AND -> E   -> Todas as expressões precisam ser verdadeiras para retornar true
 * ||-> OR  -> OU
 * ! -> NOT -> NÃO
 */

const expressaoAnd=true && true && false && true
const expressaoOr=false || false || true || false || false

console.log(!true)

const usuario='Ste'  // form usuário digitou
const senha='123456'// form usuário digitou

//                       True               False
const vaiLogar = usuario === 'Ste' && senha === '12345'

console.log(vaiLogar)