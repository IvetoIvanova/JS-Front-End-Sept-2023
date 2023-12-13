function countStringOccurences(text, wordToSearch) {
    let words = text.split(" ");
    let counter = 0;

    for (const word of words) {
        if (word === wordToSearch) counter++;
    }

    console.log(counter);
}

countStringOccurences('This is a word and it also is a sentence',
    'is');
countStringOccurences('softuni is great place for learning new programming languages',
    'softuni');