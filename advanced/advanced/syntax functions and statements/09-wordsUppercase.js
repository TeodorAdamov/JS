function uppercase(words) {
    let pattern = /\w+/g

    const wordsArr = words.match(pattern).map(word => word.toUpperCase())
    console.log(wordsArr.join(', '));
}

uppercase('Hi, how are you?')