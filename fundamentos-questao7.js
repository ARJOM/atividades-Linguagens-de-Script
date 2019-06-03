//Questão7
var frase = "Sim é útil e importante aprender matematica";
var resultado = frase.split(" ");
var i;
for (i=0; i < resultado.length; i++){
  var item = resultado[i];
  if (item.length >= 5){
    item = item.toUpperCase();
    console.log(item);
  }
  else {
    item = item.toLowerCase();
    console.log(item)
  }
}