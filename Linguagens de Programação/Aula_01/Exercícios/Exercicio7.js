//Escreva uma função que receba uma string como argumento e retorne a string
//invertida.

function inverter(strign1)
{
    let palavra = strign1.split("");
    let invertida = "";

    let cont = 0;

    for(let i = palavra.length-1; i >= 0; i--)
    {
        invertida = invertida + palavra[i];
    }
    
    return invertida;
}

console.log(inverter("Abner"));

