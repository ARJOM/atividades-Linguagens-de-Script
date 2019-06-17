function exibir(){
    let decimal = parseInt(document.getElementById("decimal").value);
    let binario = decimal.toString(2);
    document.getElementById("binario").value = binario;
    let octal = decimal.toString(8);
    document.getElementById("octal").value = octal;
    let hexadecimal = decimal.toString(16).toUpperCase();
    document.getElementById("hexadecimal").value = hexadecimal;
}