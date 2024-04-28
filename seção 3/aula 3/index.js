/**
 * && -> false && true -> false "o valor mesmo"
 * || -> true && false -> vai retornar "o valor verdadeiro"
 * 
 * FALSY
 * false
 * 0
 * '' " " ` `
 * null / undefined
 * NaN
 */

console.log('Ste' && ' ' && 'Maria')

function falaOi(){
    return 'Oi'
}

const vaiExecutar = 'Joãozinho'
console.log(vaiExecutar && falaOi())

console.log(0 || false || null || 'Ste' || true)

const corUsuario=null
const corPadrao=corUsuario||'preto'
console.log(corPadrao)

const a = 0
const b = null
const c = 'false'
const d =  false
const e =  NaN
console.log(a || b || c || d || e)
