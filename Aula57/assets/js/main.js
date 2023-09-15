
function criaCalc(){

    return{
        display:document.querySelector('.display'),
        btnClear:document.querySelector('.btn-clear'),

        
        inicia(){
            this.clickbut();
            this.pressionEnter();
        },

        pressionEnter(){
            this.display.addEventListener('keyup', e=>{
                if(e.keyCode ===13){
                    this.makecalc();
                }
            });
        },

        makecalc(){
            let conta = this.display.value;

            try {
                let conta = this.display.value;
                
                if (!conta) {
                    alert('Conta inválida');
                    return;
                }
            
                // Validar a entrada do usuário para garantir que contenha apenas números e operadores válidos
                if (!/^[0-9+\-*/().\s]*$/.test(conta)) {
                    alert('Conta inválida');
                    return;
                }
            
                const resultado = new Function('return ' + conta)();
            
                if (isNaN(resultado)) {
                    alert('Conta inválida');
                    return;
                }
            
                this.display.value = String(resultado);
            } catch (e) {
                alert('Erro na avaliação da conta');
                return;
            }  
          
        },

        clearDisplay(){
          this.display.value = '';  
        },

        deleteOne(){
            this.display.value = this.display.value.slice(0, -1);
        },

        clickbut(){
            document.addEventListener('click', e =>{
           const el = e.target;     
            
           if(el.classList.contains('btn-num')){
            this.btnParaDisplay(el.innerText);         
        }

        if(el.classList.contains('btn-clear')){
            this.clearDisplay();
        }
        if(el.classList.contains('btn-del')){
            this.deleteOne();  
        }

        if(el.classList.contains('btn-eq')){
            this.makecalc();
        }

        });
        },

        btnParaDisplay(valor){
            this.display.value += valor;        
        }

    };
}

const calc = criaCalc();
calc.inicia();