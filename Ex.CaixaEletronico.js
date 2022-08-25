// DESAFIO CAIXA ELETRONICO

var nome, cpf, opcao
var saldoTotal = 1000
var valor = 0
var continuarCadastro = 0
var continuar = true
var maiorValorInserido = 0
var mediaValores = 0
var contadorMedia = 0
var arrayValores = []
var contadorArray = 0

nome = prompt(`Insira o seu nome`)
cpf = parseFloat(prompt(`Insira o seu cpf`))

while(continuar){
opcao = prompt(`1 - Saque/ 2 - Depósito`)
console.log(`Saldo Total: R$${saldoTotal}`)
valor = parseInt(prompt(`Qual o valor`))

arrayValores[contadorArray] = valor
contadorArray++
if(opcao == 1){

    if(valor > saldoTotal || valor < 0){
        console.log(`Valor negativo ou saldo insuficiente`)
    }
    else{
    saldoTotal = saldoTotal - valor
    console.log(`Saldo Total Atual: R$${saldoTotal}`)
    contadorMedia++
    mediaValores = mediaValores + valor
    }
}
else if(valor < 0){
    console.log(`Valor negativo ou saldo insuficiente`)
}
    else{
    saldoTotal = saldoTotal + valor
    console.log(`Saldo Total Atual: R$${saldoTotal}`)
    contadorMedia++
    mediaValores = mediaValores + valor
}

if(valor > maiorValorInserido){
    maiorValorInserido = valor
}        
      continuarCadastro = prompt(`1 - Continuar/2 - Encerrar`)
    if(continuarCadastro != 1){
        continuar = false
   }
}

console.log(`Maior valor inserido: R$${maiorValorInserido}`)
mediaValores = mediaValores/contadorMedia
console.log(`Média dos valores inseridos: R$${mediaValores.toFixed(2)}`)
console.log(`Todos os valores inseridos: ${arrayValores}, CPF: ${cpf}`)