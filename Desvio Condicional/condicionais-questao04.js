//Questão4
var alunos = [["Gabriel", [10, 7, 4]], ["Amanda", [10, 8.1, 10]], ["Lucas", [6.9, 6.9, 6.9]], ["Denis", [4, 6, 2]], ["Mônica", [4, 2, 10]]];
var i, j;
var soma = 0;
var media = 0;
var situacao;
for (i=0; i<alunos.length; i++){
    var aluno = alunos[i];
    var notas = aluno[1];
    for (j=0; j < notas.length; j++){
        soma += notas[j];
    }
    media = soma/notas.length;
    if (media >=7){
        situacao = "aprovado";
    }
    else{
        situacao = "reprovado"
    }
    console.log(aluno[0]+", média "+ media+", "+situacao);
    soma = 0;
    media = 0;
}