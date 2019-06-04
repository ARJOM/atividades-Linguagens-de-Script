//Questão10
var nome = "Antônio Ricart Jacinto de Oliveira Medeiros";
var resultado = nome.split(" ");
var abreviacao = "";
var i;
for (i=resultado.length-1; i > 0; i--){
  var item = resultado[i];
  var letra = item[0].toUpperCase();
  abreviacao += letra+". ";
}
abreviacao += resultado[0];
console.log(abreviacao);