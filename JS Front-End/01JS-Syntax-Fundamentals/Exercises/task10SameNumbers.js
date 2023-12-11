function sameNumbers(numberAsInteger) {
    let numberAsString = String(numberAsInteger);
    let sum = 0;
    let sameDigits = 1;
    let previousNum = 0;

    for (let i = 0; i < numberAsString.length; i++) {
        let currentNum = Number(numberAsString[i]);

        if (i != 0) {
            if (currentNum == previousNum) {
                sameDigits++;
            }
        }

        sum += currentNum;
        previousNum = currentNum;
    }

    if (sameDigits == numberAsString.length) {
        console.log("true");
    } else {
        console.log("false");
    }

    console.log(sum);
}

sameNumbers(2222222);
sameNumbers(1234);