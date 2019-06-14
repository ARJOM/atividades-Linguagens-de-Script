horas = 0;
minutos = 0;
segundos = 0;
var intervalo;

function iniciar(){
    document.getElementById("começo").disabled = true;
    intervalo = setInterval(function(){
        crono = document.getElementById("crono");
        segundos += 1;
        if (segundos == 60){
            minutos += 1;
            if (minutos == 60){
                horas += 1;
                minutos = 0;
            }
            segundos = 0; 
        }
        
        crono.innerHTML = horas+":"+minutos+":"+segundos;
    
    }, 1000);
}

function parar(){
    document.getElementById("começo").disabled = false;
    clearInterval(intervalo);
}

function zerar(){
    crono = document.getElementById("crono");
    horas = 0;
    minutos = 0;
    segundos = 0;
    crono.innerHTML = horas+":"+minutos+":"+segundos;
}