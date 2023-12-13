function censoredWords(sentence, word) {
    const regex = new RegExp(word, 'g');
    const replacement = "*".repeat(word.length);

    console.log(sentence.replace(regex, replacement));
}

censoredWords('A small sentence with some words', 'small');
censoredWords('Find the hidden word', 'hidden');
