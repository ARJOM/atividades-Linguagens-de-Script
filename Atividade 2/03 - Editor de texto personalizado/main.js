function palavras(){
    let mensagem = document.getElementById("msg").value;
    let resultado = document.getElementById("res");
    let contagem = mensagem.split(" ");
    if (contagem == ""){
        resultado.value = "Palavras: 0";
    }
    else{
        resultado.value = "Palavras: "+contagem.length;
    }
}

function letras(){
    let mensagem = document.getElementById("msg").value;
    let resultado = document.getElementById("res");
    let contador = 0;
    let contagem = mensagem.split(" ");
    for (var i = 0; i < contagem.length; i++){
        let palavra = contagem [i];
        for (var j = 0; j < palavra.length; j++){
            contador += 1;
        }
    }
    resultado.value = "Letras: "+contador;
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