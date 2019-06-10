//Questão6
var lista = [2, 3, 10, 8, 2, 5, 10, 2];
var i;
var j;
var maior = 0;
var indice = 0;
for (i = 0; i <= lista.length; i++){
  var cont = 0;
  var num = lista[i];
  console.log(num)
  for (j = 0; j < lista.length; j++){
    if (num == lista[j]){
      cont = cont+1;
    }
  }
  if (cont > maior) {
    maior = cont;
    indice = i;
  }
}
console.log(lista[indice]+" é o número com maior recorrência")