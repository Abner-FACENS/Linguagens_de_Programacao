
let comparar = (num) => 
    {
        let maior = Number.MIN_VALUE;
        let menor = Number.MAX_VALUE;

        for (let i = 0; i < num.length; i++) 
        {
            if (num[i] > maior)
                {
                    maior = num[i];
                }
            
            else if (num[i] < menor)
            {
                menor = num[i];
            }
        }

        return "O maior número é " + maior + " e o menor é " + menor;
    }
    

console.log(comparar([1, 2, 3, 4, 6, 0, -3]))