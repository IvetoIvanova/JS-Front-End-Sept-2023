function stringSubstring(word, text) {

    let wordsArr = text.toLowerCase().split(' ');
    let result = `${word} not found!`;

    for (let i = 0; i < wordsArr.length; i++) {
        let currentWord = wordsArr[i];

        if (currentWord === word) {
            result = currentWord;
        }
    }

    console.log(result);
}