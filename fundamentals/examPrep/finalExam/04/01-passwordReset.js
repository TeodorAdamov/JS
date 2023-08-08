function passwordReset(data) {

    let string = data.shift();

    for (let line of data) {
        if (line === 'Done') {
            break;
        }

        if (line.includes('TakeOdd')) {
            let newStr = '';
            for (let i = 1; i < string.length; i += 2) {
                newStr += string[i]
            }
            string = newStr;

        } else if (line.includes('Cut')) {
            let [_, index, length] = line.split(' ');
            index = Number(index);
            length = Number(length);

            let strToReplace = string.substring(index, index + length);
            string = string.replace(strToReplace, '');

        } else {
            let [_, str, replacement] = line.split(' ');
            if (string.includes(str)) {
                let regex = new RegExp(`${str}`, 'g');
                string = string.replace(regex, replacement);
            } else {
                console.log('Nothing to replace!');
                continue;
            }


        }
        console.log(string);
    }

    console.log(`Your password is: ${string}`);
}

passwordReset(["up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy",
"TakeOdd",
"Cut 18 2",
"Substitute ! ***",
"Substitute ? .!.",
"Done"])

