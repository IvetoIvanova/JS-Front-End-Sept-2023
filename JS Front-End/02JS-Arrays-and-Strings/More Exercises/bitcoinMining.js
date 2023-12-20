function bitcoinMining(shiftArray) {
    let totalAmountOfBitcoins = 0;
    let totalAmountOfMoney = 0;
    let countOfDaysBoughtBitcoin = 0;
    let firstDayBoughtBitcoin = 0;


    for (let index = 0; index < shiftArray.length; index++) {
        let currentDayGoldInGr = shiftArray[index];
        let pricePerGrGold = 67.51;
        let pricePerOneBitcoin = 11949.16;

        if ((index + 1) % 3 === 0) {
            currentDayGoldInGr = currentDayGoldInGr - (0.30 * currentDayGoldInGr);
        }

        let priceOfGoldForCurrentDay = currentDayGoldInGr * pricePerGrGold;
        totalAmountOfMoney += priceOfGoldForCurrentDay;

        if (totalAmountOfMoney >= pricePerOneBitcoin) {
            let countOfBitcoinToBuy = totalAmountOfMoney / pricePerOneBitcoin;
            let roundedCountOfBitcoinToBuy = parseInt(countOfBitcoinToBuy, 10);

            totalAmountOfBitcoins += roundedCountOfBitcoinToBuy;
            countOfDaysBoughtBitcoin++;

            if (countOfDaysBoughtBitcoin === 1) {
                firstDayBoughtBitcoin = index + 1;
            }

            totalAmountOfMoney -= pricePerOneBitcoin * roundedCountOfBitcoinToBuy;
        }
    }

    console.log(`Bought bitcoins: ${totalAmountOfBitcoins}`);

    if (countOfDaysBoughtBitcoin > 0) {
        console.log(`Day of the first purchased bitcoin: ${firstDayBoughtBitcoin}`);
    }

    console.log(`Left money: ${totalAmountOfMoney.toFixed(2)} lv.`);
}

bitcoinMining([100, 200, 300]);
bitcoinMining([50, 100]);
bitcoinMining([3124.15, 504.212, 2511.124]);