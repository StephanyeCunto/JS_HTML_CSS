const pessoa={
    nome:'Ste',
    sobrenome:'Cunto',
    idade:19,
    endereço:{
        bairro:'centro',
        numero:11
    }
}

//Atribuição via desestruturação
const {nome: name=' ',sobrenome, endereço:{bairro:b= 'america',numero},endereço}= pessoa
const {nome,sobrenome:posnome, ... resto}=pessoa
console.log(nome,posnome,resto)