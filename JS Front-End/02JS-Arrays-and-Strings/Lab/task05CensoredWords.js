function censoredWords(sentence, word) {
    const regex = new RegExp(word, 'g');
    const replacement = "*".repeat(word.length);

    console.log(sentence.replace(regex, replacement));
}

censoredWords('A small sentence with some words', 'small');
censoredWords('Find the hidden word', 'hidden');


//function censoredWords(sentence, word) {
// while (sentence.includes(word)) {
//     sentence = sentence.replace(word, "*".repeat(word.length));
// }
// console.log(sentence);
//}