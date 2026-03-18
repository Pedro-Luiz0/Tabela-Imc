export function calcularImc(peso, altura){
    let imc = peso / (altura * altura)
    return imc
}

export function definirClassificação(imc, tagPessoa){
    
if(imc < 18.5){
    // Abaixo do Peso
        tagPessoa.textContent = "Abaixo do Peso"
} else if(imc < 24.9){
    // 
    tagPessoa.textContent = "Peso Normal"
} else if (imc < 29.9){
    // 
    tagPessoa.textContent = "Sobrepeso"
} else if (imc < 34.9){
    // 
    tagPessoa.textContent = "Obesidade Grau I"
} else if (imc < 39.9){
    // 
    tagPessoa.textContent = "Obesidade Grau II"
} else {
    tagPessoa.textContent = "Obesidade Grau III"
}
}

