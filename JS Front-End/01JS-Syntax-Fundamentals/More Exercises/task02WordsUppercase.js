function wordsUppercase(inputString) {

    let words = inputString.match(/\w+/g);

    if (words) {
        let upperCaseWords = words.map(function (word) {
            return word.toUpperCase();
        });

        let result = upperCaseWords.join(", ");

        console.log(result);
    }
}

wordsUppercase('Hi, how are you?');
wordsUppercase('hello');


function extractAndConvertToUpperCase(inputString) {
    let words = inputString.match(/\w+/g);

    if (words) {
        let upperCaseWords = words.map(function (word) {
            return word.toUpperCase();
        });

        let result = upperCaseWords.join(", ");

        console.log(result);
    } else {
        return "No words found in the input.";
    }
}

extractAndConvertToUpperCase('Hi, how are you?');
extractAndConvertToUpperCase('hello');

