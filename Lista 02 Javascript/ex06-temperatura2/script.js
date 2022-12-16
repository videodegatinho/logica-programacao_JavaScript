function temperatura(){
    var fahrenheit = parseFloat(prompt("Qual é a tempatura em graus fahrenheit?"));

    celsius = (fahrenheit - 32) * (5/9);

    alert("A temperatura em fahrenheit é: " + celsius);
}