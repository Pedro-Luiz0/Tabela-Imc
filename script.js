import {calcularImc, definirClassificação} from './opc.js'
let trs = document.querySelectorAll('tbody tr')
let input = document.querySelector('.entrada')
// laço de repetição
for (let index = 0; index <=19 ; index++) {
    let tr = trs[index]
    let filhos = tr.children
    
    // informaçoes
    let altura = filhos[2].textContent
    let peso = filhos[3].textContent

    altura = parseFloat(altura)
    peso = parseFloat(peso)

    let resultado = calcularImc(peso , altura)
    
    let imc = filhos[4]
    imc.textContent = resultado.toFixed(1)
    
    let imcFinal = parseFloat(imc.textContent)
    definirClassificação(imcFinal, filhos[5])

}
// ITERADOR
trs.forEach(tr => {
    let filhos = tr.children
    
    let status = filhos[5]
    let pai = status.parentNode
       
    if(status.textContent == 'Abaixo do Peso'){
        pai.style.backgroundColor = 'red'
    } else if(status.textContent == 'Peso Normal'){
        pai.style.backgroundColor = 'gray'
     } else if(status.textContent == 'Sobrepeso'){
       pai.style.backgroundColor = 'green'
    } else if(status.textContent == 'Obesidade Grau I'){
        pai.style.backgroundColor = 'blue'
     }else if(status.textContent == 'Obesidade Grau II'){
        pai.style.backgroundColor = 'orange'
     }  else{ 
        pai.style.backgroundColor = 'green'
    }
})

trs.forEach(tr =>{
    let filhos = tr.children
    
    let status = filhos[5]
    if(status.textContent == 'RECUPERAÇÃO'){
        tr.classList.add('recuperacao')
    }
})

// filtro na tabela
input.addEventListener('input', ()=>{

    //let texto = entrada.value
    let esconder = true

    let valor = input.value.toLowerCase() 

    trs.forEach(tr => {
        tr.visible = true
        let tds = tr.children
        
                
        if (!tds[5].textContent.toLowerCase().includes(valor)) {
            tr.visible = false      
        }
        
        console.log(tr.visible)
        
        if(tr.visible){
            tr.style.display = 'table-row'
        } else {
            tr.style.display = 'none'
        }
        
    })
    console.log('----')

})