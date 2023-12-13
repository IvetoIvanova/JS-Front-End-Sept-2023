function substringTask(string, startIndex, countOfElementsToDel) {
    const result = string.substring(startIndex, startIndex + countOfElementsToDel);
    console.log(result);
}

substringTask('ASentence', 1, 8);
substringTask('SkipWord', 4, 7);