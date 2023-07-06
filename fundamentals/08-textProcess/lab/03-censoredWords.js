function censored(text, word) {

    while (text.includes(word)) {
       text = text.replace(word, '*'.repeat(word.length));
    }
    console.log(text);
}

censored(
    'A small sentence with some small words',
    'small')