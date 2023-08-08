function secretChat(data) {

    let message = data.shift();

    for (let line of data) {
        if (line === 'Reveal') {
            break;
        }

        if (line.includes('ChangeAll')) {
            let [_, str, replacement] = line.split(':|:');
            let regex = new RegExp(`${str}`, 'g');
            message = message.replace(regex, replacement);

        } else if (line.includes('Reverse')) {
            let [_, str] = line.split(':|:');
            if (message.includes(str)) {
                let index = message.indexOf(str)
                let reversed = message.slice(index, index + str.length)
                    .split('')
                    .reverse()
                    .join('')
                message = message.slice(0, index) + message.slice(index + str.length) + reversed;
                
            } else {
                console.log('error');
                continue;
            }
        } else if (line.includes('InsertSpace')) {
            let [_, index] = line.split(':|:')
            message = message.slice(0, index) + ' ' + message.slice(index);
            
        }
        console.log(message);
    }

    console.log(`You have a new text message: ${message}`);
}

secretChat([
    'Hiware?uiy',
    'ChangeAll:|:i:|:o',
    'Reverse:|:?uoy',
    'Reverse:|:jd',
    'InsertSpace:|:3',
    'InsertSpace:|:7',
    'Reveal'
  ]
  
)