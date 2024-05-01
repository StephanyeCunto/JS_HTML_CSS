// IIFE -> Imediately invoked function expression

/*function qualquerCoisa(){
    console.log(11123455)
}

qualquerCoisa()*/

(function(idade, peso,altura){
    const nome="Ste"
    const sobrenome="Cunto"
    console.log(nome)

    function falaOi(nome){
        return nome+' '+sobrenome
    }

    function falaNome(){
        console.log(falaOi(nome))
        console.log(idade, peso, altura)
    }

    falaNome()
})(19,39,1.63)

const nome="Qualuqer coisa"
console.log(nome)