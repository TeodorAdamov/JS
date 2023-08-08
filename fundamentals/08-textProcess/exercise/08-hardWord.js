function hardWords(data) {

    const letterArr = data[0].split(' ');

    for (let word of letterArr) {
        if (word.startsWith('_')) {

            for (const match of data[1]) {

                if (!word.endsWith('_') && (word.length - 1) === match.length) {
                    let token = word[word.length - 1]
                    letterArr.splice(letterArr.indexOf(word), 1, match + token)
                    break;
                } else if (word.length === match.length) {
                    letterArr.splice(letterArr.indexOf(word), 1, match)
                    break;
                }
            }
        }
    }
    console.log(letterArr.join(' '));
}

hardWords(['new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',
    ['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']])