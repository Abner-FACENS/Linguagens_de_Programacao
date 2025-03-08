//Escreva uma função que recebe uma string como argumento e retorna o número de
//vogais presentes nessa string. Considere apenas vogais minúsculas (a, e, i, o, u).

function contar(palavra) {
    let string = palavra.split("");
    let cont = 0;


    for (let i = 0; i < string.length; i++) {
        switch (string[i]) {
            case 'a':
                cont++;
                break;
            case 'e':
                cont++
                break;
            case 'i':
                cont++
                break;
            case 'o':
                cont++
                break;
            case 'u':
                cont++
                break;
        }
    }

    return cont;
}

console.log("Essa palavra tem ",contar('Raios'),"vogais.")