function numberModification(inputNumber) {
    while (calculateDigitAverage(inputNumber) <= 5) {
        inputNumber += '9';
    }

    console.log(inputNumber);


    function calculateDigitAverage(number) {
        let numberAsString = number.toString();
        let sum = 0;

        for (let i = 0; i < numberAsString.length; i++) {
            sum += parseInt(numberAsString[i]);
        }

        let average = sum / numberAsString.length;
        return average;
    }
}

numberModification(101);
numberModification(5835);