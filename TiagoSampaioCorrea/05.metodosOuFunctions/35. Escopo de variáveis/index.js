var variavel1 = 5

function funcaoTeste() {
  var variavel1 = 10
  console.log(variavel1)
  console.log(this.variavel1)
}

var a = 1

function alterarValor() {
  this.a = a
}

function valor(b) {
  a = b
}
