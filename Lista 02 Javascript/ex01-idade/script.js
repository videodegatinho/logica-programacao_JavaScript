function diasVividos(){
    var anos = parseInt(prompt("Quantos anos você tem?"));
    var meses = parseInt(prompt("Quantos meses se passaram desde o seu aniversário?"));
    var dias = parseInt(prompt("Quantos dias se passaram desde o seu últimos mêsversário?"));
    var diasVividos = anos*365*meses*30+dias;
    alert("A quantidade de dias vividos é: " + diasVividos);
}