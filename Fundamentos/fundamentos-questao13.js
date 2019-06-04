//Questão13
var numeros = [10, 12, 13, 4, 5, 6, 89];
var soma = 0;
var i;
for (i= 0; i < numeros.length; i++){
  var numero = numeros[i];
  numero = numero*numero*numero;
  soma += numero
}
console.log(soma)