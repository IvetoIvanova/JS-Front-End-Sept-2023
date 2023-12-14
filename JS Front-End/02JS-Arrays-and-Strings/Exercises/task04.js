function sortingNumbers(array) {
    let resultArr = [];
    let sortedArray = array.sort((a, b) => a - b);
    let arrayLength = array.length;
    for (let index = 0; index < arrayLength; index++) {

        if (index % 2 === 0) {
            resultArr.push(sortedArray.shift());
        } else {
            resultArr.push(sortedArray.pop());
        }
    }

    return resultArr;
}
