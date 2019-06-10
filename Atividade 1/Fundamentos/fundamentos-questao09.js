//Questão9
var frase = "Sim é úTiL e impoRtaNte aprEnder MateMatica";
var soma = 0;
var resultado = frase.split(" ");
var i;
for (i=0; i < resultado.length; i++){
  var item = resultado[i];
  soma += item.length;
}
console.log(soma)