let formatar = (valor) => {
    
    let dividido = valor.toString().split(".");
    let inteiro;
    if(dividido.length > 2)
    {
        inteiro = "R$" + dividido[0] + "," + dividido[1][0] + dividido[1][1];
    }

    else {
        inteiro = "R$" + dividido[0];
    }
    return inteiro;
}

console.log("Seu troco é:", formatar(0.1 + 0.2))
