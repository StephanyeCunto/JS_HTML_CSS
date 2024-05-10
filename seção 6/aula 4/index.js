/**
 * Object.values
 * Object.entries
 * Object.assign(des,any) copia um objeto
 * Object.getOwnPropertyDescriptor(o,'prop)
 * ... (spread)
 * 
 * Obejct.keys (retorna as chaves)
 * Obejct.freeze (congela o objeto)
 * Object.defineProperties (define várias propriedades)
 * Object.defineProperty (define uma propriedade)
 */         

const produto={nome:'Caneca',preco:1.8}
//Object.freeze(produto)
//const outraCoisa= {...produto}
// spread

const produto2={nome:produto.nome, preco:produto.preco}
const outraCoisa={...produto, 
                    material:'porcelana'
                }

const outraObjeto= Object.assign({},produto,{material:'vidro'})

produto.nome='Luiz'
console.log(produto)
console.log(outraCoisa)
console.log(outraObjeto)

console.log(Object.keys(produto))

Object.defineProperty(produto,'nome',{
    writable:false,
    configurable:false,
    enumerable:true
})
produto.nome='Ste'
delete produto.nome

console.log(Object.getOwnPropertyDescriptor(produto,'nome'))
console.log(Object.values(produto))
//console.log(Object.entries(produto))

for(let entry of Object.entries(produto)){
    console.log(entry)
}

for(let valor of Object.entries(produto)){
    console.log(valor[0],valor[1])
}

for(let [chave,valor] of Object.entries(produto)){
    console.log(chave,valor)
}