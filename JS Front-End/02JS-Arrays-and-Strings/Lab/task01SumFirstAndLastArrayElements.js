function sumFirstAndLastElements(inputArrOfNum) {
    let firstElement = inputArrOfNum.shift();
    let lastElement = inputArrOfNum.pop();
    console.log(firstElement + lastElement);
}

sumFirstAndLastElements([20, 30, 40]);
sumFirstAndLastElements([10, 17, 22, 33]);
sumFirstAndLastElements([11, 58, 69]);
