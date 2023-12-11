function fruit(typeOfFruit, weightInGrams, pricePerKG) {
    let weightInGr = Number(weightInGrams);
    let pricePerKg = Number(pricePerKG);
    let weightInKg = weightInGr / 1000;


    let totalMoneyForFruit = weightInKg * pricePerKg;
    console.log(`I need $${totalMoneyForFruit.toFixed(2)} to buy ${weightInKg.toFixed(2)} kilograms ${typeOfFruit}.`)
}

fruit('orange', 2500, 1.80);
fruit('apple', 1563, 2.35);