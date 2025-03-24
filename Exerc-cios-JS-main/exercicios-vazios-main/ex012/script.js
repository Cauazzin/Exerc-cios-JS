var valorReal = Number(prompt("Digite um valor em Real"))
var taxaCambio = 5.30

var conversao = valorReal / taxaCambio

alert(`O seu valor convertido em Dólar é: US$${conversao.toLocaleString(`pt-BR`, {style: "currency", currency: "BRL"})}`)