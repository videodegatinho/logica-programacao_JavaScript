function novoSalario(){
    var salario = parseFloat(prompt("Digite o valor do seu salário atual:"));
    var reajuste = parseFloat(prompt("Digite o percentual do seu reajuste:"));

    var aumento = (reajuste/100) * salario;
    var novoSalario = salario + aumento;

    alert("O novo salário é: " + novoSalario);
}