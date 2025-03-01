let triangulo = (num1, num2, num3) => 
{   
    if (num1 == num2 && num2 == num3) return "Equilátero";

    else if(num1 != num2 && num2 != num3 && num3 != num1) return "Escaleno";

    else return "Isóceles"; 
}

console.log("O seu triangulo é: ", triangulo(11, 12, 10))