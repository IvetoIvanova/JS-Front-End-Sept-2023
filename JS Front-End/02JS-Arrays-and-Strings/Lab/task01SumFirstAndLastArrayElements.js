function sumFirstAndLastElements(inputArrOfNum) {
    let firstElement = inputArrOfNum.shift();
    let lastElement = inputArrOfNum.pop();
    console.log(firstElement + lastElement);
}

sumFirstAndLastElements([20, 30, 40]);
sumFirstAndLastElements([10, 17, 22, 33]);
sumFirstAndLastElements([11, 58, 69]);

// function sumFirstAndLastArrElements(inputArrOfNum) {
//     let first = inputArrOfNum[0];
//     let last = inputArrOfNum[inputArrOfNum.length - 1];
//     console.log(first + last);
// }

// sumFirstAndLastArrElements([20, 30, 40]);
// sumFirstAndLastArrElements([10, 17, 22, 33]);
// sumFirstAndLastArrElements([11, 58, 69]);