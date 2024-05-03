// Função construtora -> objetos
// Função fabrica -> objetos

// Construtora -> Pessoa (new)

function Pessoa(nome,sobrenome){
    //const ID=01
    this.nome= nome
    this.sobrenome= sobrenome

    this.metodo= function(){
        console.log(this.nome + " ,sou um método")
        métodoInterno()
    }

    const métodoInterno= function(){
        console.log('Método private')
    }
}

const p1= new Pessoa('Ste', 'Cunto')
const p2= new Pessoa('Maria', 'Oliveira')

p1.metodo()

