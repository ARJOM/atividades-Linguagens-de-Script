//Questão2
var vogais = ["a", "e", "i", "o", "u"];
function depura(frase){
    frase.toLowerCase();
    totalv = 0;
    totalc = 0;
    var resultado = frase.split(" ");
    var i;
    for (i = 0; i < resultado.length; i++){
        let palavra = resultado[i];
        for (j = 0; j < palavra.length; j ++){
            if (vogais.includes(palavra[j])){
                totalv += 1;
            }
            else{
                totalc += 1;
            }
        }
    }
    return [totalv, totalc];
}
var retorno = depura("Nao funciona com acentos e caracteres especiais");
console.log("O total de vogais é: "+retorno[0]);
console.log("O total de consoantes é: "+retorno[1]);