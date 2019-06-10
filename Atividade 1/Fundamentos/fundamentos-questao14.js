//Questão14
var frase = "Minha vizinha ainda é cedo";
var resultado = frase.split(" ");
var palavra = "vizinha";
var teste = false;
var i;
for (i = 0; i < resultado.length; i++){
    if (palavra == resultado[i]){
        teste = true;
    }
}
if (teste){
    console.log("A palavra está na frase");
}
else {
    console.log("A palavra não está na frase");
}