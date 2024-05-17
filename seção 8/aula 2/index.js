function rand(min,max){
    min*=1000
    max*=1000

    return Math.floor(Math.random()*(max-min)+min)
}

function esperaAi(msg,tempo){
    return new Promise((resolve,reject)=>{        
        setTimeout(()=>{
            if(typeof msg !== 'string') return reject('CAI NO ERRO')
            resolve(msg.toUpperCase() + ' - Passe na promise')
            return
        },tempo)
    })
}

const promises=[
    //'Primeiro valor',
    esperaAi('Promise 1', rand(1,5)),
    esperaAi('Promise 2', rand(1,5)),
    esperaAi('Promise 3', rand(1,5)),
    esperaAi(1000,rand(1,5)),
    //'Outro valor'
]

Promise.race(promises)
    .then(function(valor){
        console.log(valor)
    })
    .catch(function(erro){
        console.log(erro)
    })

    function baixaPagina(){
        const emCache = true

        if(emCache){
            return Promise.resolve('Página em cache')
        }else{
            return esperaAi('Baixei a página', 3000)
        }  
    }

    baixaPagina()
    .then(dadosPagina=>{
        console.log(dadosPagina)
    })
    .catch(e=> console.log('ERRO', e))

/*Promise.all(promises)
    .then(function(valor){
        console.log(valor)
    })
    .catch(function(erro){
        console.log(erro)
    })

*/

//Promise.all Promise.race Promise.resolve Promise.reject