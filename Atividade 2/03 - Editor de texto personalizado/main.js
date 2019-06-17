 function palavras(){
    let mensagem = document.getElementById("msg").value;
    let resultado = document.getElementById("res");
    let contador = 0;
    let contagem = mensagem.split("\n");
    for (var i = 0; i < contagem.length; i++){
        let linha = contagem [i];
        let separa = linha.split(" ");
        for (var j = 0; j<separa.length; j++){
            if (separa[j] != ""){
                contador += 1;
            }
        }
    }
    resultado.value = "Palavras: "+contador;
}

function caracteres(){
    let mensagem = document.getElementById("msg").value;
    let resultado = document.getElementById("res");
    let contador = 0;
    let contagem = mensagem.split(" ");
    for (var i = 0; i < contagem.length; i++){
        let palavra = contagem [i];
        for (var j = 0; j < palavra.length; j++){
            let caracter = palavra[j];
            if (caracter != "\n"){
                contador += 1;
            }
        }
    }
    resultado.value = "Caracteres: "+contador;
}

function linhas(){
    let mensagem = document.getElementById("msg").value;
    let resultado = document.getElementById("res");
    let contagem = mensagem.split("\n");
    if (contagem == ""){
        resultado.value = "Linhas: 0";
    }
    else{
        resultado.value = "Linhas: "+contagem.length;
    }
}

function maiusculo(){
    let mensagem = document.getElementById("msg").value;
    let resultado = document.getElementById("res");
    let maior = mensagem.toUpperCase();
    resultado.value = maior;
}

function minusculo(){
    let mensagem = document.getElementById("msg").value;
    let resultado = document.getElementById("res");
    let maior = mensagem.toLowerCase();
    resultado.value = maior;
}