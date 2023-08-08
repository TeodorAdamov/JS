function pascalCaseSplit(string) {

    let resultArr = [];
    let word = string[0]

    for (let i = 1; i < string.length; i++) {
        const char = string[i];

        if (char === char.toUpperCase()) {
            resultArr.push(word)
            word = string[i]
        } else {
            word += char
        }

        if (i === string.length - 1) {
            resultArr.push(word)
        }
    }
    console.log(resultArr.join(', '));
}

pascalCaseSplit('SplitMe')