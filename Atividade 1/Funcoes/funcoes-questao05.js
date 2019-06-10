//Questão5
function maiorPalavra(frase){
    var resultado = frase.split(" ");
    var maior = resultado[0];
    var i;
    for (i = 1; i < resultado.length; i++){
        var palavra = resultado[i];
        if (palavra.length > maior.length){
            maior = palavra;
        }
    }
    return maior;
}
var frase = "Quando chegar a um povoado habitado principalmente por orcs, você será reconhecido lá como um orc poderoso e digno de ser seguido";
var retorno = maiorPalavra(frase);
console.log("'"+retorno+"' é a maior palavra na frase '"+frase+"'");