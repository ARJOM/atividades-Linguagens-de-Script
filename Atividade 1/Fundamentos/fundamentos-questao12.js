//Questão12
var itens = [10, "strong", "oi", 45, "eae fake"];
var resultado = "";
resultado += itens[0];
var i;
for (i= 1; i < itens.length; i++){
  var item = itens[i];
  resultado += "#";
  resultado += item;
}
console.log(resultado);