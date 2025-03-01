//exemplo de destructor
let aluno = {
    nome: "José",
    email: "jose@gmail.com",
    telefone: "(15) 9944466",
    endereco: {
        rua: "Rua das Flores",
        numero: 1,
        bairro: "Vila Leste"
    },
    notas: [10, 8, 7.5, 10]
}

let {nome, email} = aluno;
console.log(nome)

let {nome: a, telefone: b} = aluno;

console.log(a, b)

let [x, y, z] = [1, 2, 3];

console.log(y)