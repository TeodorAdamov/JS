function revealWords(wordsString, sentenceToFill) {


    for (let word of wordsString.split(', ')) {
        
        sentenceToFill = sentenceToFill.replace('*'.repeat(word.length), word)
    }
    console.log(sentenceToFill);
}

revealWords(
    'great, learning',
    'softuni is ***** place for ******** new programming languages')