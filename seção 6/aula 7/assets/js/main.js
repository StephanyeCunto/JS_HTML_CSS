// Produto -> aumento, desconto
// Camiseta, caneca

function Produto(nome, preco){
    this.nome = nome
    this.preco = preco
}

Produto.prototype.aumento = function(quantia){
    this.preco+= quantia
}

Produto.prototype.desconto = function(quantia){
    this.preco-= quantia
}

function Camiseta(nome,preco,cor){
    Produto.call(this, nome, preco)
    this.cor = cor
}
Camiseta.prototype= Object.create(Produto.prototype)
Camiseta.prototype.constuctor= Camiseta

Camiseta.prototype.aumento= function(percentual){
    this.preco= this.preco + (this.preco * (percentual / 100))
}

function Caneca(nome,preco,material, estoque){
    Produto.call(this,nome,preco)
    this.material = material
    this.estoque = estoque

    Object.defineProperty(this,'estoque',{
        enumerable: true,
        configurable: false,
        get: function(){
            return estoque
        },
        set: function(valor){
            if(typeof valor !== 'number') return
            estoque = valor
        }
    })
}

Caneca.prototype = Object.create(Produto.prototype)
Caneca.prototype.constuctor = Caneca


const caneca = new Caneca('Caneca',13,'Plástico',5)
const produto= new Produto('gen',111)
const camiseta = new Camiseta('Regata', 7.5 , 'Preta') 
camiseta.aumento(100)
console.log(caneca)
console.log(produto)
console.log(camiseta)