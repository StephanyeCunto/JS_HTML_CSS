/* JavaScript é baseado em protótipos para passar propriedades e métodos
de um objeto para outro.

Definição de protótipo
Protótipo é o termo usado para se referir ao que foi criado pela primeira
vez,servindo de modelo ou molde para futuras produções.

Todos os objetos tem uma referência interna para um protótipo (__proto__)
que vem da propriedade prototype da função construtora que foi usada para
criá-lo.Quando tentamos acessar um menbro de um objeto, primeiro o motor
do JS vai tentar encontrar este menbro no próprio objeto e depois a cadeia 
de protótipos é usada até o topo (null) até encontrar (ou não) tal membro.
*/

// Construtora -> molde (classe)
function Pessoa(nome, sobrenome){
    this.nome = nome
    this.sobrenome = sobrenome
    //this.nomeCompleto=()=> 'Original:'+' '+this.nome+' '+this.sobrenome
}

// Pessoa.prototype === pessoa1.__proto__

Pessoa.prototype.estouAqui='hahahaha'
Pessoa.prototype.nomeCompleto=function(){
    return this.nome+' '+this.sobrenome
}

// instância
const pessoa1 = new Pessoa('Luiz','O')
const pessoa2 = new Pessoa('Maria','A')
const data = new Date()

console.log('')
console.dir(pessoa1)
console.log('')
console.dir(pessoa2)
console.log('')
console.dir(data)
console.log('')
console.log(pessoa1.estouAqui)
console.log('')
console.log(pessoa1.nomeCompleto())