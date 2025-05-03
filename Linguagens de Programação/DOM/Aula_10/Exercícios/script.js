

function escrever (event)
{
    event.preventDefault();

    let cidade = document.getElementById('cidade').valuex

    fetch(`https://wttr.in/${cidade}?format=3`)
    .then(response => response.text())
    .then(data => {
        document.getElementById('tempo').innerHTML = data;
    })
    .catch(error => {
        console.error('Erro ao buscar o tempo:', error);
    });

}