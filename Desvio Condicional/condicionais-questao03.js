//Questão3
var i;
var somap = 0;
var somai = 0;
for (i=0; i<=99; i++){
    if (i%2==0){
        somap += i;
    }
    else{
        somai += i;
    }
}
console.log("A soma de todos os números pares entre 0 e 99 é: "+somap);
console.log("A soma de todos os números pares entre 0 e 99 é: "+somai);