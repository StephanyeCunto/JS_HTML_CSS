/**
 * Entre 0 - 11 - Bom dia
 * Entre 12 - 17 - Boa tarde
 * Entre 18 - 23 - Boa noite
 */

const hora = 16

if( hora >=0 && hora <= 11){
    console.log('Bom dia')
}else if(hora <= 17){
    console.log('Boa tarde')
}else if (hora <= 24){
    console.log('Boa noite')
}else{
    console.log('Olá')
}

const tenhoGrama = true

if(tenhoGrama){
    console.log("Vou sair de casa")
}else{
    console.log("Não vou sair de casa")
}