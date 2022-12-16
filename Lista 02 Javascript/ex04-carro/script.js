function carro(){
    var percDistribuidor = 29;
    var percImpostos = 47;

    var custoFabrica = parseFloat(prompt("Qual o valor de custo de fábrica do seu veículo?"));

    valorDistribuidor = custoFabrica + (custoFabrica * percDistribuidor/100);
    valorImposto = custoFabrica + (custoFabrica * percImposto/100);
    custoConsumidor = custoFabrica + valorDistribuidor + valorImposto;

    alert("O valor total é: " + custoConsumidor);

}