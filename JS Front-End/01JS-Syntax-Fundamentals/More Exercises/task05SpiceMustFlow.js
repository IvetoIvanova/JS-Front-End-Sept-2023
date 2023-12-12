function spiceMustFlow(startingYield) {
    let totalAmountOfSpice = 0;
    let countOfDays = 0;
    let consumeOfWorkers = 26;
    let spices = startingYield;

    while (startingYield >= 100) {
        countOfDays++;
        spices -= consumeOfWorkers;
        totalAmountOfSpice += spices;
        startingYield -= 10;

        if (startingYield < 100) {
            totalAmountOfSpice -= consumeOfWorkers;
            break;
        }

        spices = startingYield;
    }

    console.log(countOfDays);
    console.log(totalAmountOfSpice);
}

spiceMustFlow(111);
spiceMustFlow(450);