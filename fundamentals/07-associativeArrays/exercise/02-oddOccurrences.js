function odd(data) {

    let wordsObj = new Map;

    let lowerCase = data.toLowerCase().split(' ')


    for (let word of lowerCase) {

        if (!wordsObj.has(word)) {
            wordsObj.set(word, 1);
        } else {
            let curValue = wordsObj.get(word);
            curValue++;
            wordsObj.set(word, curValue);
        }
    }
    let result = []
    for (let [key, value] of wordsObj) {
        if (value % 2 !== 0) {
            result.push(key);
        }
    }
    console.log(result.join(' '));
}

odd("Java C# Php PHP Java PhP 3 C# 3 1 5 C#")