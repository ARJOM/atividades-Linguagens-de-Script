//Questão3
function maiorMenor(lista){
    var maior = lista[0];
    var menor = lista[0];
    var i;
    for (i=1; i<lista.length; i++){
        var numero = lista[i];
        if (numero > maior){
            maior = numero;
        }
        else if (numero < menor){
            menor = numero;
        }
    }
    return [maior, menor];
}

var lista = [10, 15, 16, 25, 38, 14, 95, 785, 12, 8];
var retorno = maiorMenor(lista);
console.log("O valor mais alto presente na lista é: "+retorno[0]);
console.log("O valor mais baixo presente na lista é: "+retorno[1]);
