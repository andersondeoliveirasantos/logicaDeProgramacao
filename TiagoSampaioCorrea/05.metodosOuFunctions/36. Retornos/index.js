function SomarValores(ValorA, valorB) {
  var resultado = ValorA + valorB
  return resultado
}

function EhMaiorDeIdade(idade) {
  if (idade < 0) {
    console.log('A idade deve ser maior que zero.')
    return // Poderia ser substituido por um else
  }
  var EhMaior = idade >= 18
  return EhMaior
}
