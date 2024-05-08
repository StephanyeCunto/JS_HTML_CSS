const parImpar=(n=0)=>(n%2==0)? true: false
console.log(parImpar(4))

const soma=(n1=0,n2=0)=>(n1+n2)
console.log(soma(2,3))

function fatorial(n){
    let fat=1
    /*while(n>1){
        fat*=n
        n--
    } 
    return fat*/

    for(let c=n;c>1;c--){
        fat*=c
    }
    return fat
}

console.log(fatorial(4))

/*function fatorialRecursivo(n){
    if(n==1){
        return 1
    }else{
        return n* fatorial(n-1)
    }
}*/

const fatorialRecursivo=(n) => (n==1) ? 1 : n*fatorialRecursivo(n-1)

console.log(fatorialRecursivo(4))