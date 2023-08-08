function modernTimesOfHasTag(string) {

    let words = string.split(' ');


    for (let word of words) {
        let result = '';
        let isSpecial = true
        if (word.startsWith("#") && word.length > 1) {
            word = word.replace('#', '');
            for (let char of word) {
                let code = char.charCodeAt();
                if ((code >= 0 && code < 65) || (code > 90 && code < 96) || (code > 122)) {
                    isSpecial = false;
                    break;    
                }
                result += char;   
            }
            if(!isSpecial) {
                continue;
            }
            console.log(result);

        }
    }
}

modernTimesOfHasTag('Nowadays everyone uses # to tag a #sp%ecial word in #socialMedia')