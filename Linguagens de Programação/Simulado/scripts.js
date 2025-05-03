let carros = [
    {
        id: 1,
        carro: "HB20",
        modelo: "Hyundai HB20 1.0 Sense",
        preco: 150,
        dataReserva: "2025-05-01"
    },
    {
        id: 2,
        carro: "Onix",
        modelo: "Chevrolet Onix LT 1.0",
        preco: 160,
        dataReserva: "2025-05-02"
    },
    {
        id: 3,
        carro: "Corolla",
        modelo: "Toyota Corolla XEi 2.0",
        preco: 230,
        dataReserva: "2025-05-03"
    },
    {
        id: 4,
        carro: "Argo",
        modelo: "Fiat Argo Drive 1.0",
        preco: 145,
        dataReserva: "2025-05-04"
    },
    {
        id: 5,
        carro: "Kwid",
        modelo: "Renault Kwid Zen 1.0",
        preco: 130,
        dataReserva: "2025-05-05"
    },
    {
        id: 6,
        carro: "Polo",
        modelo: "Volkswagen Polo TSI 1.0",
        preco: 175,
        dataReserva: "2025-05-06"
    },
    {
        id: 7,
        carro: "HR-V",
        modelo: "Honda HR-V EX 1.8",
        preco: 250,
        dataReserva: "2025-05-07"
    },
    {
        id: 8,
        carro: "Compass",
        modelo: "Jeep Compass Longitude 1.3 Turbo",
        preco: 300,
        dataReserva: "2025-05-08"
    },
    {
        id: 9,
        carro: "Tracker",
        modelo: "Chevrolet Tracker LT 1.2 Turbo",
        preco: 280,
        dataReserva: "2025-05-09"
    },
    {
        id: 10,
        carro: "Civic",
        modelo: "Honda Civic Touring 1.5 Turbo",
        preco: 270,
        dataReserva: "2025-05-10"
    }
]

let reservas = []

async function preencher_reservas() {


    const link1 = 'https://68154a8632debfe95dbb4bd7.mockapi.io/Reserva'

    let resposta = await Promise.all([
        fetch(link1)
    ])

    reservas = await resposta[0].json()
    console.log(reservas)

}

preencher_reservas();


function preencher(event) {

    let select = document.getElementById('car')
    select.innerHTML = `<option value="">Selecione...</option>`;
    let data = document.getElementById('data').value

    let carrossemreserva = carros.filter(x => x.dataReserva != event.target.value)

    carrossemreserva.forEach(element => {


        let option = document.createElement('option')
        option.value = element.carro;
        option.innerHTML = element.carro;

        select.appendChild(option)
        
    });

}



function mudar(event) {

    let carro = document.getElementById('car').value
    console.log(carro)

    carros.forEach(element => {
        if (carro == element.carro) {

            document.getElementById('model').value = element.modelo
            document.getElementById('preco_diaria').value = `R$ ${element.preco},00`
        }
    }
    )
}

function gravar(event) {
    event.preventDefault();

    let name = document.getElementById('name').value
    let email = document.getElementById('email').value
    let phone = document.getElementById('phone').value
    let data = document.getElementById('data').value
    let car = document.getElementById('car').value
    let model = document.getElementById('model').value
    let preco_diaria = document.getElementById('preco_diaria').value



    let reserva = {
        name: name,
        phone: phone,
        email: email,
        data: data,
        car: car,
        model: model,
        preco_diaria: preco_diaria
    }


    fetch('https://68154a8632debfe95dbb4bd7.mockapi.io/Reserva', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(reserva),
    })
        .then(resposta => resposta.json())
        .then(dados => {
            console.log(dados)
            document.getElementById('name').value = ''
            document.getElementById('email').value = ''
            document.getElementById('phone').value = ''
            document.getElementById('data').value = ''
            document.getElementById('car').value = ''
            document.getElementById('model').value = ''
            document.getElementById('preco_diaria').value = ''
            window.alert('Cliente cadastrado com sucesso!')
        })

}
