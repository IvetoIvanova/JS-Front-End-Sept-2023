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
    // Use a regular expression to match words (alphanumeric sequences)
    let words = inputString.match(/\w+/g);

    if (words) {
        // Convert the words to uppercase
        let upperCaseWords = words.map(function (word) {
            return word.toUpperCase();
        });

        // Join the uppercase words with ", "
        let result = upperCaseWords.join(", ");

        console.log(result);
        //return result;
    } else {
        return "No words found in the input.";
    }
}

extractAndConvertToUpperCase('Hi, how are you?');
extractAndConvertToUpperCase('hello');

// Example usage:
//   let inputString = "This is a sample sentence, with words that should be converted.";
//   let convertedString = extractAndConvertToUpperCase(inputString);
//   console.log(convertedString);
