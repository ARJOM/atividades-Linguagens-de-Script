function calcula(){
    let altura = parseFloat(document.getElementById("altura").value);
    let peso = parseFloat(document.getElementById("peso").value);
    let imc = peso/(altura*altura);
    let radio = document.getElementsByName("genero");
    for (var i=0; i < radio.length; i++){
        if (radio[i].checked){
            var genero = radio[i].value;
        }
    }
    if (genero == "f"){
        if (imc < 20.7){
            window.alert("Você está abaixo do peso");
        }
        else if (imc < 26.4){
            window.alert("Você está com peso normal");
        }
        else if (imc < 27.8){
            window.alert("Você está marginalmente acima do peso");
        }
        else if (imc < 31.1){
            window.alert("Você está acima do peso ideal");
        }
        else{
            window.alert("Você está obeso");
        }
    }
    else if (genero == "m"){
        if (imc < 19.1){
            window.alert("Você está abaixo do peso");
        }
        else if (imc < 25.8){
            window.alert("Você está com peso normal");
        }
        else if (imc < 27.3){
            window.alert("Você está marginalmente acima do peso");
        }
        else if (imc < 32.3){
            window.alert("Você está acima do peso ideal");
        }
        else{
            window.alert("Você está obeso");
        }
    }
    else{

    }
}
