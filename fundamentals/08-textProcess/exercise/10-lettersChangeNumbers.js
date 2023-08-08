function lettersChangeNumbers(text) {

    const textArr = text.split(' ');
    let total = 0;
    for (const word of textArr) {
        if(word === 'End') {
            break;
        }
        if(word === '') {
            continue;
        }
        let tokens = word.split('')
        let firstCode = tokens.shift().charCodeAt();
        let lastCode = tokens.pop().charCodeAt();
        let num = Number(tokens.join(''))
        let operator = 0;
        let result = 0

        if (result === 0) {
            result = num
        }
        if (firstCode >= 65 && firstCode <= 90) {
            operator = firstCode - 64;
            result /= operator;
        } else if (firstCode >= 97 && firstCode <= 122) {
            operator = firstCode - 96;
            result *= operator;
        }

        if (lastCode >= 65 && lastCode <= 90) {
            operator = lastCode - 64;
            result -= operator;
        } else if (lastCode >= 97 && lastCode <= 122) {
            operator = lastCode - 96;
            result += operator;
        }
        total += result
    }

    console.log(total.toFixed(2));
}

lettersChangeNumbers('P34562Z q2576f    H456z End')