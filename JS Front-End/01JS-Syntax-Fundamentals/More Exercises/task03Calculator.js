function calculator(num1, operatorStr, num2) {
    let result;

    switch (operatorStr) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        case '*':
            result = num1 * num2;
            break;
    }

    console.log(result.toFixed(2));
}

calculator(5,
    '+',
    10);
calculator(25.5,
    '-',
    3);