function reverseAnArrOfNumbers(n, inputArr) {

    const reverseArr = inputArr.slice(0, n).reverse().join(" ");
    console.log(reverseArr);

    // let arr = [];
    // for (let i = 0; i < n; i++) {
    //     const element = arr[i];
    //     arr.push(element);
    // }
    // console.log(arr);
}

reverseAnArrOfNumbers(3, [10, 20, 30, 40, 50]);
reverseAnArrOfNumbers(4, [-1, 20, 99, 5]);
reverseAnArrOfNumbers(2, [66, 43, 75, 89, 47]);