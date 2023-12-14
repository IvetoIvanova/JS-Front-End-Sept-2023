function printEveryNthElementFromAnArr(array, step) {
    let newArr = [];
    let arrayLength = array.length;

    for (let i = 0; i < arrayLength; i += step) {
        let currentNum = array[i];
        newArr.push(currentNum);
    }

    return newArr;
    // console.log(newArr);
}

printEveryNthElementFromAnArr(['5','20','31','4','20'],2);
printEveryNthElementFromAnArr(['dsa','asd','test','tset'],2);
printEveryNthElementFromAnArr(['1','2','3','4','5'],6);