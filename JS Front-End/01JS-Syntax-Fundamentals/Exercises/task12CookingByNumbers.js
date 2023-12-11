function cookingByNumbers(numAsString, operation1, operation2, operation3, operation4, operation5) {
    let num = Number(numAsString);
    let arrOp = [];

    arrOp.push(operation1);
    arrOp.push(operation2);
    arrOp.push(operation3);
    arrOp.push(operation4);
    arrOp.push(operation5);

    for (let i = 0; i < arrOp.length; i++) {
        let currentOperation = arrOp[i];

        switch (currentOperation) {
            case "chop": num /= 2; break;
            case "dice": num = Math.sqrt(num); break;
            case "spice": num += 1; break;
            case "bake": num *= 3; break;
            case "fillet": num *= 0.80; break;
        }
        console.log(num);
    }
}

cookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop');
cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet');