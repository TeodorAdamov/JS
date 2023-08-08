function replaceRepeatingChars(string) {

    let lastLetter = '';
    let result = '';

    for (const char of string) {

        if(lastLetter !== char) {
            result += char;
        }
       lastLetter = char;
    }
    console.log(result);
}

replaceRepeatingChars('aaaaabbbbbcdddeeeedssaa')