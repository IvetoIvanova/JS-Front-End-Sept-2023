function modernTimesOfHashTag(text) {

    let regex = /#[A-Za-z]+/gm;
    let matches = text.match(regex);

    for (let word of matches) {
        word = word.replace('#', '');
        console.log(word);
    }
}

modernTimesOfHashTag('Nowadays everyone uses # to tag a #special word in #socialMedia');
modernTimesOfHashTag('The symbol # is known #variously in English-speaking #regions as the #number sign');