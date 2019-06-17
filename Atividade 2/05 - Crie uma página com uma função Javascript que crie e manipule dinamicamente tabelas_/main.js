linhas = 0;

function novaTabela(){
    var minhaDiv = document.getElementById("tabela");
    document.getElementById("newTable").disabled = true;
    var tabela = document.createElement("table");
    minhaDiv.appendChild(tabela);
}

function novaLinha(){
    var minhaDiv = document.getElementById("tabela")
    var tabela = minhaDiv.childNodes[0];
    var linha = tabela.insertRow(linhas);
    linhas += 1;
    var bloco1 = linha.insertCell(0);
    var conteudo = prompt("Digite o valor a ser adicionado na tabela: ");
    bloco1.innerText =  conteudo;
}

function excluirLinha(){
    var minhaDiv = document.getElementById("tabela")
    var tabela = minhaDiv.childNodes[0];
    var linha = prompt("Digite a linha que você quer apagar: ");
    linha = parseInt(linha);
    //Se o usuario considerar a tabela começando do um, tire o comentário a seguir:
    //linha -= 1;
    tabela.deleteRow(linha);
    linhas -= 1;
}