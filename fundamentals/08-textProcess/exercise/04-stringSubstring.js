function strSubstring(match, text) {

    const textArr = text.split(' ');

    for(const word of textArr) {
        if (word.toLowerCase() === match.toLowerCase()) {
            console.log(match.toLowerCase());
            return;
        }
    }
    console.log(`${match.toLowerCase()} not found!`);
}

strSubstring(
    'python',
    'JavaScript is the best programming language'

)