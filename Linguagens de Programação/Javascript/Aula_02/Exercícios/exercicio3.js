let jurosSimples = (capital, taxa, tempo) => capital + (capital * taxa * tempo);

let jurosCompostos = (capital, taxa, tempo) => capital * (1 + taxa)**tempo;

let formatar = (valor) => {
    
    let dividido = valor.toString().split(".");
    let inteiro;
    if(dividido.length > 2)
    {
        inteiro = "R$ " + dividido[0] + "," + dividido[1][0] + dividido[1][1];
    }

    else {
        inteiro = "R$ " + dividido[0];
    }
    return inteiro;
}

console.log("Juros Simples: ", formatar(jurosSimples(1000, 0.10, 2)))
console.log("Juros Compostos: ", formatar(jurosCompostos(1000, 0.10, 2)))