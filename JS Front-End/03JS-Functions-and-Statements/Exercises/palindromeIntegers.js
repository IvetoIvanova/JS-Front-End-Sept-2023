function palindromeIntegers(array) {

    function isPalindrome(num) {
        let numAsStr = num.toString();
        let reversedNum = numAsStr.split('').reverse().join('');

        return numAsStr === reversedNum;
    }

    for (const currentNum of array) {
        console.log(isPalindrome(currentNum));
    }
}

palindromeIntegers([123, 323, 421, 121]);
palindromeIntegers([32, 2, 232, 1010]);