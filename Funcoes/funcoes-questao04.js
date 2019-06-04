//Questão4
function estaNaFrase(frase, palavra){
    var teste = false;
    var resultado = frase.split(" ");
    var i;
    for (i = 0; i < resultado.length; i++){
        if (palavra == resultado[i]){
            teste = true;
        }
    }
    return teste;
}
var frase = "Você usa o próprio corpo como ferramenta de medo e guerra psicológica";
var palavra = "intimidadr";
if (estaNaFrase(frase, palavra)){
    console.log("A palavra '"+palavra+"' está na frase: '"+frase+"'")
}
else{
    console.log("A palavra '"+palavra+"' não está na frase: '"+frase+"'")
}