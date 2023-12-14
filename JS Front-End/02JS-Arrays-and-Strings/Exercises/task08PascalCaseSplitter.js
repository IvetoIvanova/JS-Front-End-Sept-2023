function pascalCaseSplitter(string) {

    let regex = /[A-Z][a-z]*/gm;
    let wordsArray = string.match(regex);
    let resultStr = wordsArray.join(', ');

    console.log(resultStr);
}

pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan');
pascalCaseSplitter('HoldTheDoor');
pascalCaseSplitter('ThisIsSoAnnoyingToDo');