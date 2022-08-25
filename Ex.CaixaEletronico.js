// DESAFIO CAIXA ELETRONICO

var nome, cpf, opcao
var saldoTotal = 1000
var valor = 0
var continuarCadastro = 0
var continuar = true

nome = prompt(`Insira o seu nome`)
cpf = parseFloat(prompt(`Insira o seu cpf`))
while(continuar){
opcao = prompt(`1 - Saque/ 2 - Depósito`)
console.log(`Saldo Total Atual: ${saldoTotal}`)
valor = parseInt(prompt(`Qual o valor`))

if(opcao == 1){
    saldoTotal = saldoTotal - valor
}
else{
    saldoTotal = saldoTotal + valor
}
console.log(`Saldo Total: ${saldoTotal}`)
    continuarCadastro = prompt(`1 - Continuar/2 - Encerrar`)
    if(continuarCadastro != 1){
        continuar = false
    }
    
    
}
