const link = "https://67cb71f43395520e6af556a4.mockapi.io/cliente"

let clientes = []



function carregarClientes() {
    fetch(link)
        .then(response => response.json())
        .then(dados => {
            clientes = dados;
            montarTabela(dados);
        });
}


function montarTabela(dados) {
    let tabela = document.getElementById("tabela_clientes")

    tabela.innerHTML = "";

    dados.forEach(cliente => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td> ${cliente.id} </td>
            <td> ${cliente.nome} </td>
            <td> ${cliente.email} </td>
            <td> ${cliente.telefone} </td>
            <td> 
                <button type="button" class="btn btn-dark" data-bs-toggle="modal" data-bs-target="#exampleModal">          
                    <i class="bi bi-pencil-square"></i> Editar 
                </button>

                <button type="button" class="btn btn-dark">
                    <i class="bi bi-trash"></i> Excluir
                </button>     
            </td>`
        tabela.appendChild(tr);
    })
}

carregarClientes();

function filtrar(event)
{
    event.preventDefault();

    let nome = document.getElementById("nome").value;

    let clientes_filtrados = clientes.filter((cliente) => cliente.nome.toLowerCase().startsWith(nome.toLowerCase()));

    montarTabela(clientes_filtrados);
}