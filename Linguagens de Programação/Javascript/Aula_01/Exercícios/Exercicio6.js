//Faça uma função que mostre o dobro do número passado. Caso o número seja menor
//ou igual a zero deve mostrar a mensagem “Só é aceito números positivos maiores que
//zero”.

function duplicar(num1)
{   if (num1 > 0)
    {
        return num1 * 2;
    }

    else 
    {
        console.log("Só é aceito números positivos maiores que zero.")
    }
}

console.log(duplicar(-2));



