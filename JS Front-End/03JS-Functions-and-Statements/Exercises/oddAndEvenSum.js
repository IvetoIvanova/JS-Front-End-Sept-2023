function oddAndEvenSum(number) {
  let numberAsString = number.toString();
  let oddSum = 0;
  let evenSum = 0;

  for (let index = 0; index < numberAsString.length; index++) {
    let currentDigit = Number(numberAsString[index]);

    if (currentDigit % 2 === 0) {
      evenSum += currentDigit;
    } else {
      oddSum += currentDigit;
    }
  }

  console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
  //console.log(typeof numberAsString);
}

oddAndEvenSum(1000435);
oddAndEvenSum(3495892137259234);