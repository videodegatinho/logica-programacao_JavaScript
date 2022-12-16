function valoresTrocados(){
    var a = parseFloat(prompt("Qual o valor de A?"));
    var b = parseFloat(prompt("Qual o valor de B?"));

    var c = a;
    var a = b;
    var b = a;

    alert("O valor A passou a ser " + b + "e o valor B passou a ser" +a);
}