function stringManipulator(data) {

    let string = data.shift();

    for (let line of data) {
        if (line === 'End') {
            break;
        }

        if (line.includes('Translate')) {
            let [_, char, replacement] = line.split(' ');
            let regex = new RegExp(`${char}`, 'g');
            string = string.replace(regex, replacement);
            console.log(string);

        } else if (line.includes('Includes')) {
            let [_, substring] = line.split(' ');
            if (string.includes(substring)) {
                console.log('True');
            } else {
                console.log('False');
            }

        } else if (line.includes('Start')) {
            let [_, substring] = line.split(' ');
            if (string.startsWith(substring)) {
                console.log('True');
            } else {
                console.log('False');
            }

        } else if (line.includes('Lowercase')) {
            string = string.toLowerCase()
            console.log(string);

        } else if (line.includes('FindIndex')) {
            let [_, char] = line.split(' ');
            console.log(string.lastIndexOf(char));

        } else if (line.includes('Remove')) {
            let [_, startIndex, count] = line.split(' ')
            startIndex = Number(startIndex);
            count = Number(count);

            string = string.slice(0, startIndex) + string.slice(startIndex + count);
            console.log(string);
        }
    }
}

stringManipulator(["//Thi5 I5 MY 5trING!//",
    "Translate 5 s",
    "Includes string",
    "Start //This",
    "Lowercase",
    "FindIndex i",
    "Remove 0 10",
    "End"])