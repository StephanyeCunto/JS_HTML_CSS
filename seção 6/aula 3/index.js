// defineProperty -> Getter e Setters

function Produto(nome,preco,estoque){
    this.nome=nome
    this.preco=preco

    let estoquePrivado=estoque

    Object.defineProperty(this,'estoque',{
        enumerable:true,
        //value:estoque,
        //writable:true,
        configurable:true,
        get: function(){
            return estoquePrivado
        },
        set: function(valor){
            if(typeof valor!=='number'){
                //throw new TypeError('Mensagem')
                return
            }
            estoquePrivado=valor
        }
    })
}

function criaProduto(nome){
    return{
        get nome(){
            return nome
        },
        set nome(valor){
            valor=valor.replace('coisa.','')
            nome=valor
        }
    }
}

/*const p1=new Produto('Camisa',20,3)
p1.estoque='Qualquer coisa'
console.log(p1.estoque)*/

const p2 = criaProduto('Camiseta')
p2.nome='Qualquer coisa.'
console.log(p2.nome)