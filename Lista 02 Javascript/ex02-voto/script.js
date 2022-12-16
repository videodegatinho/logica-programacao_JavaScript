function votos(){
    var eleitoresMunicipio = parseInt(prompt("Quantos eleitores tem no município?"));
    var votosBrancos = parseInt(prompt("Quantos eleitores votaram em branco?"));
    var votosNulos = parseInt(prompt("Quantos eleitores votaram nulo?"));
    var votosValidos = parseInt(prompt("Quantos votos foram válidos?"));

    var porcentagemVotosBrancos = votosBrancos/eleitoresMunicipio*100;
    var porcentagemVotosNulos = votosNulos/eleitoresMunicipio*100;
    var porcentagemVotosValidos = votosValidos/eleitoresMunicipio*100;

    alert("A porcentagem de votos brancos é: " + porcentagemVotosBrancos + "%");
    alert("A porcentagem de votos nulos é: " + porcentagemVotosNulos + "%");
    alert("A porcentagem de votos válidos é: " + porcentagemVotosValidos + "%");

}
