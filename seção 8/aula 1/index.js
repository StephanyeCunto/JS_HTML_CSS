function rand(min,max){
    min*=1000
    max*=1000
    return Math.floor(Math.random()* (max-min)+min)
}

function esperaAi(msg,tempo){
    return new Promise((resolve,reject)=>{
        if(typeof msg !== 'string')reject('BAD VALUE')

        setTimeout(()=>{
            resolve(msg)
        },tempo) 
    })
}

esperaAi('Frase 1', rand(1,3)) // Conexão com o BD
    .then(resposta=>{
        console.log(resposta)
        return esperaAi('Frase 2',rand(1,3)) // Buscando dados da BASE
    })
    .then(resposta=>{
        console.log(resposta)
        return esperaAi(22222,rand(1,3)) // Tratando os dados da BASE
    })
    .then(resposta=>{
        console.log(resposta)
    })
    .then(()=>{
        console.log('Eu serei o último a ser exibido') // Exibe dados na tela
    })
    .catch(e=>{
        console.log('ERRO',e)
    })

console.log('Isso aqui será exibido antes de qualquer coisa')

/*function esperaAi(msg,tempo,cb){
   setTimeout(()=>{
    console.log(msg)
    if(cb) cb()
   },tempo) 
}

esperaAi('Frase 1',rand(1,3),function(){
    esperaAi('Frase 2',rand(1,3))
},function(){
    esperaAi('Frase 3',rand(1,3))
})*/
