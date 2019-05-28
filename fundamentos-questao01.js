///Questão1
var lista = ["Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado"];
dia = new Date();
console.log("Hoje é: "+lista[dia.getDay()]);
console.log("A hora atual é: "+dia.getHours()+":"+dia.getMinutes()+":"+dia.getSeconds());