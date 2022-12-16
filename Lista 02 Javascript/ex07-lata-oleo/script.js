function volume(){
    var altura = parseFloat(prompt("Qual a altura da lata de óleo?"));
    var raio = parseFloat(prompt("Qual o raio da lata de óleo?"));

    volume = Math.pi * (raio*raio) * altura;

    alert("O valor do volume da lata de óleo é: " + volume)
}