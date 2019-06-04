//Questão1
function inverso(num) {
    num = num.toString();
    var res = "";
    var i;
    for (i = num.length-1; i >= 0; i--){
        res += num[i];
    }
    res = parseInt(res);
    return res
}
var numero = 89415921;
var invertido = inverso(numero);
console.log(invertido);