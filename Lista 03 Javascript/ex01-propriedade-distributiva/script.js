function propriedadeDistributiva(){
    var a = parseInt(prompt("Digite um numero: "));
    var b = parseInt(prompt("Digite um numero: "));
    var c = parseInt(prompt("Digite um numero: "));
    var d = parseInt(prompt("Digite um numero: "));

    axb = a * b;
    axc = a * c;
    axd = a * d;
    bxc = b * c;
    bxd = b * d;
    cxd = c * d;

    amb = a + b;
    amc = a + c;
    amd = a + d;
    bmc = b + c;
    bmd = b + d;
    cmd = c + d;

    alert("Resultado das operações: ");
    alert(a + " x" + b+ " =" + axb);
    alert(a + " x" + c+ " =" + axc);
    alert(a + " x" + d+ " =" + axd);
    alert(b + " x" + c+ " =" + bxc);
    alert(b + " x" + d+ " =" + bxd);
    alert(c + " x" + d+ " =" + cxd);

    alert(a + " m" + b+ " =" + amb);
    alert(a + " m" + c+ " =" + amc);
    alert(a + " m" + d+ " =" + amd);
    alert(b + " m" + c+ " =" + bmc);
    alert(b + " m" + d+ " =" + bmd);
    alert(c + " m" + d+ " =" + cmd);
} 