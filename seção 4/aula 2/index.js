// argumentos que sustenta todos os argumentos enviados
/*function funcao(a,b,c,d,e,f){
  //  console.log(arguments[10])
  let total=0
  for(let argumento of arguments){
    total+= argumento
  }
  console.log(total,a,b,c,d,e,f)
}*/

//funcao(1, 2, 3, 4, 5)
//funcao('Valor', 1, 2, 3, 4, 5, 6, 7, 8, 9, 'Ste')

/*function funcao(a=0,b=2,c=4){
    //a=a || 0
    //b=b || 0
    console.log(a+b+c)
}*/

//funcao(2,undefined,11)
/*
function funcao([valor1,valor2,valor3]){
    console.log(valor1,valor2,valor3)
}*/

//funcao(['Ste','Cunto','19'])

//let obj={nome:'Ste',sobrenome:'Cunto',idade:19}
//funcao(obj)

//funcao({nome:'Ste',sobrenome:'Cunto',idade:19})

const conta=(operador,acumulador,...numeros)=>{
    for(n of numeros){
       if(operador==='+') acumulador+=n
       if(operador==='-') acumulador-=n
       if(operador==='*') acumulador*=n
       if(operador==='/') acumulador/=n
    }

   /* for(n in numeros){
        if(operador==='+') acumulador+=numeros[n]
        if(operador==='-') acumulador-=numero[n]
       if(operador==='*') acumulador*=numero[n]
       if(operador==='/') acumulador/=numero[n]
    }*/
    // arguments is not define console.log(arguments)
    console.log(operador,acumulador,numeros)
}

conta('+',1,20,30,40,50)