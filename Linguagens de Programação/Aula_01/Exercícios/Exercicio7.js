//Escreva uma função que receba uma string como argumento e retorne a string
//invertida.

function inverter(strign1)
{
    let palavra = strign1.split('');
    let invertida = "";

    for(let i = palavra.lenght; i >= 0; i--)
    {
        
        invertida += palavra[i];

    }
    
    return invertida;
}

console.log(inverter("Javascript"));

