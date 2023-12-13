function evenAndOddSubstraction(inputArr) {
    let sumOfEvenNums = 0;
    let sumOfOddNums = 0;

    for (let i = 0; i < inputArr.length; i++) {
        const currentNum = Number(inputArr[i]);
        const isEvenNum = currentNum % 2 === 0;

        if (isEvenNum) {
            sumOfEvenNums += currentNum;
        } else {
            sumOfOddNums += currentNum;
        }
    }

    console.log(sumOfEvenNums - sumOfOddNums);
}

evenAndOddSubstraction([1, 2, 3, 4, 5, 6]);
evenAndOddSubstraction([3, 5, 7, 9]);
evenAndOddSubstraction([2, 4, 6, 8, 10]);