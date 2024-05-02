function criaCalculadora(){

    return{
        display: document.querySelector('.display'),

        inicia(){
            this.zera()
            this.cliqueBotoes()
            this.pressionaEnter()
        }, 

        zera(){
            this.display.value=0
        },

        clearDisplay(){
            this.display.value=""
        },

        deleteOne(){
            this.display.value= this.display.value.slice(0,-1)
        },

        realizaOperaçao(){
            let conta= this.display.value

            try{
                conta=eval(conta)
                if(!conta){
                    conta='Conta inválida'
                }
            }catch(e){
                conta='Conta inválida'
            }
            this.display.value= String(conta)
        },
        
        cliqueBotoes(){
            // this-> calculadora .bind(this))
            document.addEventListener('click',e=>{
                const el= e.target

                if(el.classList.contains('btn-num')){
                    if((this.display.value=='0' && el.innerText!=".") || this.display.value=='Conta inválida'){
                        this.clearDisplay()
                    }

                    this.btnParaDisplay(el.innerText)
                }

                if(el.classList.contains('btn-clear')){
                    this.clearDisplay()
                    this.zera()
                }

                if(el.classList.contains('btn-del')){
                    this.deleteOne()
                }

                if(el.classList.contains('btn-eq')){
                    this.realizaOperaçao()
                }

            })
        },

        pressionaEnter(){
            this.display.addEventListener('keyup',e=>{
                if(e.keyCode===13){
                    this.realizaOperaçao()
                }
            })
        },

        btnParaDisplay(valor){
            this.display.value += valor
        }
    }
}

const calculadora= criaCalculadora()
calculadora.inicia()