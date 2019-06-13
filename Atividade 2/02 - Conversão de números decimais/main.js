function exibir(){
    let decimal = parseInt(document.getElementById("decimal").value);
    let binario = decimal.toString(2);
    document.getElementById("b").innerHTML = "Binário: "+binario;
    let octal = decimal.toString(8);
    document.getElementById("o").innerHTML = "Octal: "+octal;
    let hexadecimal = decimal.toString(16).toUpperCase();
    document.getElementById("h").innerHTML = "Hexadecimal: "+hexadecimal;
}