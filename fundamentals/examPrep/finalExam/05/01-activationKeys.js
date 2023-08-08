function activationKeys(data) {

    let key = data.shift();

    for (let line of data) {
        if (line === 'Generate') {
            break;
        }

        if (line.includes('Contains')) {
            let [_, str] = line.split('>>>');
            if (key.includes(str)) {
                console.log(`${key} contains ${str}`);
            } else {
                console.log("Substring not found!");
            }

        } else if (line.includes('Flip')) {
            let [_, command, startIndex, endIndex] = line.split('>>>');
            startIndex = Number(startIndex);
            endIndex = Number(endIndex)
           
            if (command === 'Upper') {
                key = key.slice(0, startIndex) + key.slice(startIndex, endIndex).toUpperCase() + key.slice(endIndex);
                console.log(key);
            } else {
                key = key.slice(0, startIndex) + key.slice(startIndex, endIndex).toLowerCase() + key.slice(endIndex);
                console.log(key);
            }

        } else if (line.includes('Slice')) {
            let [_, startIndex, endIndex] = line.split('>>>');
            startIndex = Number(startIndex);
            endIndex = Number(endIndex);
           
            key = key.slice(0, startIndex) + key.slice(endIndex);
            console.log(key);
        }
    }

    console.log(`Your activation key is: ${key}`);
}

activationKeys([
    "abcdefghijklmnopqrstuvwxyz",
    "Slice>>>6>>>2",
    "Flip>>>Upper>>>3>>>14",
    "Flip>>>Lower>>>5>>>7",
    "Contains>>>DE",
    "Contains>>>deF",
    "Generate"])


