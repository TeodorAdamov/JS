function wordOccurrences(data) {

    let myWords = new Map();

    for(let word of data) {
        if(!myWords.has(word)) {
            myWords.set(word, 1);
        } else {
           let current = myWords.get(word)
           current++;
           myWords.set(word, current);
        }
        
    }
    Array.from(myWords)
    .sort((a,b) => b[1] - a[1])
    .forEach(x => console.log(`${x[0]} -> ${x[1]} times`))
}

wordOccurrences([
    "Here", "is", "the", "first", "sentence",
    "Here", "is", "another", "sentence", "And",
    "finally", "the", "third", "sentence"]
)