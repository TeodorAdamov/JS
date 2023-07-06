function countStrings(text, wordToFind) {

    let words = text.split(' ');
    let count = 0;

    for (let word of words) {
        if (word === wordToFind) {
            count++;
        }
    }
    console.log(count);

}

countStrings('This is a word and it also is a sentence',
    'is')