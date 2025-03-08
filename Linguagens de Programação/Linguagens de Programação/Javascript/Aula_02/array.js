const qualquercoisa = [];

qualquercoisa [0] = 1;

console.log(qualquercoisa);

qualquercoisa [1] = 'a';
console.log(qualquercoisa);

//-----------------------------
const coisas = [1, 'a', 2, 'b', 3, 'c'];

console.log(coisas[2]);

coisas[10] = 9;

console.log(coisas);


coisas.unshift('primeiro');
console.log(coisas);
coisas.shift(coisas);
console.log(coisas);

console.log('Tamanho do Array: ')
coisas.push('último item');
console.log(coisas);
coisas.pop();
console.log(coisas);