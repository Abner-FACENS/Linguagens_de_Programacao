//Faça um programa que recebe o nome de uma variável e mostre o
//<<primeiro>>.<<último nome>>@facens.br

let nome = "Abner Matheus Marques Rodrigues";

let array = nome.split(" ");

console.log(array[0] + "." + array[array.length - 1] + "@facens.br");
