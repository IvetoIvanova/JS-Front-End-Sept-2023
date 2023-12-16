function addAndSubtract(first, second, third) {
    let sum = (first, second) => {
        return first + second;
    };

    let subtract = (sum, lastNum) => {
        return sum - lastNum;
    };

    console.log(subtract(sum(first, second), third));
    // let result = sum(first, second) - third;
    // console.log(sum(first, second));
    // console.log(result);
}

addAndSubtract(23, 6, 10);
addAndSubtract(1, 17, 30);
addAndSubtract(42, 58, 100);