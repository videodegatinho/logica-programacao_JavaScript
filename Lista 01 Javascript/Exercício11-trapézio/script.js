function trapezio(){
    var baseMaior = parseInt(prompt("Digite o valor da base maior do trapézio: "));
    var baseMenor = parseInt(prompt("Digite o valor da base menor do trapézio: "));
    var altura = parseInt(prompt("Digite o valor da altura do trapézio: "));
    var area = (baseMaior+baseMenor)*altura/2;
    alert("O valor da área do trapézio é: " + area);
}