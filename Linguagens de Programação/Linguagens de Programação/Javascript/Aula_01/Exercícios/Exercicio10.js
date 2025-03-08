// Escreva uma função que verifique se uma determinada string é um palíndromo (ou
// seja, pode ser lida da mesma forma tanto da esquerda para a direita quanto da direita
// para a esquerda).


function conferir (string)
{
    let palavra = string;
    let invertida = "";
    let cont = 0;

    for (let i = palavra.length-1; i >= 0; i--)
    {
        invertida += palavra[i];
        cont++;
    }

    return palavra == invertida;
    
}

console.log(conferir("arara"))