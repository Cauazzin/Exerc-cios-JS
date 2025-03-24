var valorDolar = Number(prompt("Digite um valor em Dólar"))
var taxaCambio = 5.30

var conversao = valorDolar * taxaCambio

alert(`O seu valor convertido em Reais é: R$ ${conversao.toFixed(2).replace(".",",")}`)