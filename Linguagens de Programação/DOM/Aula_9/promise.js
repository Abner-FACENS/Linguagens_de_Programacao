function consultar(event) {
    event.preventDefault();
    let carregar = document.querySelector('.carregando')
    carregar.style.visibility = 'visible';
    let cep = document.querySelector('#cep').value;
    if (cep.length == 0) {
        window.alert('Digite um CEP')
        return
    }
    cep = cep.replace('.', '').replace('-', '')

    let x = consultarCEP(cep).then(dados => {
        document.querySelector('#rua').value = dados.logradouro;
        document.querySelector('#bairro').value = dados.bairro;
        document.querySelector('#estado').value = dados.estado;
    })
    carregar.style.visibility = 'hidden'


}

function consultarCEP(cep) {
    let link = `https://viacep.com.br/ws/${cep}/json`
    return fetch(link).then(retorno => retorno.json())

}