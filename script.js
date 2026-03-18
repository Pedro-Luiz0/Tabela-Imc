import {calcularImc, definirClassificação} from './opc.js'
let trs = document.querySelectorAll('tbody tr')
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


