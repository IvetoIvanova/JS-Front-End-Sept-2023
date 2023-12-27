function processArrays(input) {
    let uniqueArrays = [];

    function arraysAreEqual(arr1, arr2) {
        if (arr1.length !== arr2.length) {
            return false;
        }

        let sortedArr1 = arr1.slice().sort();
        let sortedArr2 = arr2.slice().sort();

        for (let i = 0; i < sortedArr1.length; i++) {
            if (sortedArr1[i] !== sortedArr2[i]) {
                return false;
            }
        }

        return true;
    }

    for (let jsonString of input) {
        let currentArray = JSON.parse(jsonString);

        let isUnique = true;
        for (let existingArray of uniqueArrays) {
            if (arraysAreEqual(currentArray, existingArray)) {
                isUnique = false;
                break;
            }
        }

        if (isUnique) {
            uniqueArrays.push(currentArray);
        }
    }

    let sortedArrays = uniqueArrays.sort((a, b) => {
        if (a.length !== b.length) {
            return a.length - b.length;
        } else {
            return input.indexOf(JSON.stringify(a)) - input.indexOf(JSON.stringify(b));
        }
    });

    sortedArrays.forEach(arr => {
        console.log(`[${arr.sort((a, b) => b - a).join(', ')}]`);
    });
}

processArrays(["[-3, -2, -1, 0, 1, 2, 3, 4]",
    "[10, 1, -17, 0, 2, 13]",
    "[4, -3, 3, -2, 2, -1, 1, 0]"]);

processArrays(["[7.14, 7.180, 7.339, 80.099]",
    "[7.339, 80.0990, 7.140000, 7.18]",
    "[7.339, 7.180, 7.14, 80.099]"]);