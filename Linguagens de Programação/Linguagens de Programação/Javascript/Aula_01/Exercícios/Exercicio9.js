//Escreva uma função que recebe um endereço de e-mail como argumento e retorna
//true se o e-mail for válido ou false caso contrário. Um e-mail válido deve conter um
//único símbolo '@' e pelo menos um ponto '.' após o '@'.

function confereEmail(string) {
    let email = string.split("@");

    if (email.length > 2) {
        return false;
    }

    for (let i = 0; i < email[1].length; i++) {

        if (email[1][i] == ".") {
            return true;
        }

    }

    return false;

}

console.log(confereEmail("abner.matheus2005@gmail.com"))