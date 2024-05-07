// defineProperty - defineProperties

function Produto(nome,preco,estoque){
    // this.nome=nome
    // this.preco=preco
   // this.estoque=estoque

    /*Object.defineProperty(this,'estoque',{
        enumerable: true, // mostra a chave
        value: estoque,  // valor
        writable: false, // pode ser alterado seu valor?
        configuable:false // pode ser redefinida? pode ser apagada?
    })*/

    Object.defineProperties(this,{
        nome:{
            enumerable:true,
            value:nome,
            writable:true,
            configurable:true
        },
        preco:{
            enumerable:true,
            value:preco,
            writable:true,
            configurable:true
        }
    })

    Object.defineProperty(this,'estoque',{
        enumerable:true,
        value:estoque,
        writable:true,
        configurable:true
    })
}

const p1=new Produto('Camisa',20,3)
//p1.estoque=4
//console.log(p1.estoque())

//console.log(Object.keys(p1))
console.log(p1)

for(let chave in p1){
    console.log(p1[chave])
}