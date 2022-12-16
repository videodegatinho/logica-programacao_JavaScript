function combustivel(){
    const KM_LITRO = 12;

    var vTempo = parseInt(prompt("Informe o tempo gasto na viagem em horas: "));
    var vVelMedia = parseInt(prompt("Informe a velocidade média em KM/H: "));

    vDistancia = vTempo * vVelMedia;
    vConsumo = vDistancia / KM_LITRO;

    alert("A distância percorrida foi de: ", vDistancia, "KM.");
    alert("O consumo foi de: ", vConsumo, " litros.");
}