function streamOfLetters(input) {
    let index = 0;
    let command = input[index];
    index++;
    let word = '';
    let foundN = 0;
    let foundC = 0;
    let foundO = 0;
    let finalWord = '';

    while (command !== 'End') {
        let letter = command;
        if (foundN === 1 && letter === 'n') {
            word += letter;
        } else if (foundC === 1 && letter === 'c') {
            word += letter;
        } else if (foundO === 1 && letter === 'o') {
            word += letter;
        }


        if (foundN === 0 && letter === 'n') {
            foundN = 1;
        } else if (foundC === 0 && letter === 'c') {
            foundC = 1;
        } else if (foundO === 0 && letter === 'o') {
            foundO = 1;
        }



        switch (letter) {
            case 'A':
                word += letter;
                break;
            case 'a':
                word += letter;
                break;
            case 'B':
                word += letter;
                break;
            case 'b':
                word += letter;
                break;
            case 'C':
                word += letter;
                break;
            case 'D':
                word += letter;
                break;
            case 'd':
                word += letter;
                break;
            case 'E':
                word += letter;
                break;
            case 'e':
                word += letter;
                break;
            case 'F':
                word += letter;
                break;
            case 'f':
                word += letter;
                break;
            case 'G':
                word += letter;
                break;
            case 'g':
                word += letter;
                break;
            case 'H':
                word += letter;
                break;
            case 'h':
                word += letter;
                break;
            case 'I':
                word += letter;
                break;
            case 'i':
                word += letter;
                break;
            case 'J':
                word += letter;
                break;
            case 'j':
                word += letter;
                break;
            case 'K':
                word += letter;
                break;
            case 'k':
                word += letter;
                break;
            case 'L':
                word += letter;
                break;
            case 'l':
                word += letter;
                break;
            case 'M':
                word += letter;
                break;
            case 'm':
                word += letter;
                break;
            case 'N':
                word += letter;
                break;
            case 'O':
                word += letter;
                break;
            case 'P':
                word += letter;
                break;
            case 'p':
                word += letter;
                break;
            case 'Q':
                word += letter;
                break;
            case 'q':
                word += letter;
                break;
            case 'R':
                word += letter;
                break;
            case 'r':
                word += letter;
                break;
            case 'S':
                word += letter;
                break;
            case 's':
                word += letter;
                break;
            case 'T':
                word += letter;
                break;
            case 't':
                word += letter;
                break;
            case 'U':
                word += letter;
                break;
            case 'u':
                word += letter;
                break;
            case 'V':
                word += letter;
                break;
            case 'v':
                word += letter;
                break;
            case 'W':
                word += letter;
                break;
            case 'w':
                word += letter;
                break;
            case 'X':
                word += letter;
                break;
            case 'x':
                word += letter;
                break;
            case 'Y':
                word += letter;
                break;
            case 'y':
                word += letter;
                break;
            case 'Z':
                word += letter;
                break;
            case 'z':
                word += letter;
                break;

        }

        if (foundN === 1 && foundC === 1 && foundO === 1) {
            finalWord += word + ' '
            foundN = 0;
            foundC = 0;
            foundO = 0;
            word = '';
        }



        command = input[index]
        index++;


    }
    console.log(finalWord);

}

streamOfLetters
    (['%',
        '!',
        'c',
        '^',
        'B',
        '`',
        'o',
        '%',
        'o',
        'o',
        'M',
        ')',
        '{',
        'n',
        '/',
        'A',
        'D',
        'End'])
