async function consultar (event)
{
    event.preventDefault();
    let carregar = document.querySelector('.carregando')
    carregar.style.visibility = 'visible';
    let cep = document.querySelector('#cep').value;
    if (cep.length == 0)
    {
        window.alert('Digite um CEP')
        return
    }
    cep = cep.replace('.','').replace('-','')

    let x = await consultarCEP(cep);
    document.querySelector('#rua').value = x.logradouro;
    document.querySelector('#bairro').value = x.bairro;
    document.querySelector('#estado').value = x.estado;
}

async function consultarCEP(cep)
{
    let link = `https://viacep.com.br/ws/${cep}/json`

    let retorno = await fetch(link)
    console.log(retorno)

    let dados = await retorno.json()
    console.log(dados)

    return dados;

}