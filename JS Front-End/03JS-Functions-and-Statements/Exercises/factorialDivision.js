function calculateFactorialDivision(firstNum, secondNum) {

    function factorial(n) {
        if (n === 0 || n === 1) {
            return 1;
        } else {
            return n * factorial(n - 1);
        }
    }

    if (secondNum === 0) {
        return; //cannot divide by zero
    }

    const fact1 = factorial(firstNum);
    const fact2 = factorial(secondNum);

    const result = (fact1 / fact2).toFixed(2);
    console.log(result);
}

calculateFactorialDivision(5, 2);
calculateFactorialDivision(6, 2);