function prestacaoAtraso(){
    var valor = parseFloat(prompt("Qual o valor?"));        
    var taxa = parseFloat(prompt("Qual a taxa?"));
    var tempoAtraso = parseFloat(prompt("Qual o tempo de atraso?"));

    var prestacao = valor + (valor*taxa/100)*tempo;

    alert("O valor da prestação em atraso é: " + prestacao);
}