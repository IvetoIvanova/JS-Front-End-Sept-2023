function wordsTracker(array) {
    let stringWords = array.shift().split(' ');

    let occurances = {};

    stringWords.forEach((word) => {
        occurances[word] = 0;

        array.forEach((element) => {
            if (word === element) {
                occurances[word] += 1;
            }
        })
    });

    let entries = Object.entries(occurances).sort((a, b) => b[1] - a[1]);
    for (const [key, value] of entries) {
        console.log(`${key} - ${value}`);
    }

}

wordsTracker([
    'this sentence',
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
]);
wordsTracker([
    'is the',
    'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence']);