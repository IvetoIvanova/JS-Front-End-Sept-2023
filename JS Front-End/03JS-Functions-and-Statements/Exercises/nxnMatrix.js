function nxnMatrix(number) {

    function printRow(num) {

        return (num.toString() + ' ').repeat(num);
    }

    for (let currentRow = 1; currentRow <= number; currentRow++) {
        console.log(printRow(number));
    }
}

nxnMatrix(3);
nxnMatrix(7);
nxnMatrix(2);