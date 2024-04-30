/*try{
    // É executada quando não há erros
    console.log('Abri um arquivo')
    console.log('Manipulei o arquivo e gerou erro')

    try{
        console.log(b)
    }catch(e){
        console.log('Deu erro')
    }finally{
        console.log('Também sou finally')
    }

    console.log(a)
}catch(e){
    console.log('CATCH: executado quando há erro')
    console.log('Tratando o erro')
    // É executada quando há rttos
}finally{
    console.log('FINALLY: Eu sempre sou executado')
    console.log('Fechei o arquivo')
    // Sempre executado
}*/

function retornaHora(data){
    if(data && !(data instanceof Date)){
        console.log('Não é hora valida')
        throw new TypeError('Esperando instância de Date')
    }

    if(!data){
        data = new Date()
    }

    return data.toLocaleTimeString('pt-BR',{hour:'2-digit',minute:'2-digit',second:'2-digit',hour12:false})
}


try{
    const hora = retornaHora(12)
    console.log(hora)
}catch(e){

}finally{
    console.log('Tenha um bom dia')
}