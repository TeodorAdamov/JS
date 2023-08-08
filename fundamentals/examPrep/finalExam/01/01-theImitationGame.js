function imitationGame(data) {

    let message = data.shift();

    for (let line of data) {
        if (line === 'Decode') {
            break;
        }
        let [command, firstToken, secondToken] = line.split('|')

        switch (command) {
            case 'Move':
                let firstLetters = message.substring(0, Number(firstToken));
                message = message.replace(firstLetters, '').concat(firstLetters);
                break;
            case 'Insert':
                let index = Number(firstToken);
                let value = secondToken;
                message = message.slice(0, index) + value + message.slice(index);
                break;
            case 'ChangeAll':
                let letter = firstToken;
                let replacement = secondToken

                while (message.includes(letter)) {
                    message = message.replace(letter, replacement);
                }
                break;
        }
    }

    console.log(`The decrypted message is: ${message}`);
}

imitationGame(
    [
        'zzHe',
        'ChangeAll|z|l',
        'Insert|2|o',
        'Move|3',
        'Decode',
    ]
)