function starEnigma(data) {

    data.shift()
    let starRegEx = /[star]/gi
    let pattern = /[^@\-\!:>]*@(?<name>[A-Za-z]+)[^@\-\!:>]*:(?<population>\d+)[^@\-\!:>]*!(?<type>[AD])![^@\-\!:>]*->(?<soldiers>\d+)[^@\-\!:>]*/

    let decryptedMessages = [];


    for (let line of data) {
        let decprypted = ''
        let specialSymbolCount = line.match(starRegEx)
        console.log(specialSymbolCount);
        if (specialSymbolCount === null) {
            decryptedMessages.push(line)
            continue;
        }

        for (let symbol of line) {
            let code = (symbol.charCodeAt() - specialSymbolCount.length)
            let newSymbol = String.fromCharCode(code)
            decprypted += newSymbol
        }
        decryptedMessages.push(decprypted)
    }

    let attackedPlanets = [];
    let destroyedPlanets = [];
    for (let message of decryptedMessages) {
        let match = pattern.exec(message)
        if (match === null) {
            continue;
        }

        if (match.groups.type === 'A') {
            attackedPlanets.push(match.groups.name)
        } else if (match.groups.type === 'D') {
            destroyedPlanets.push(match.groups.name)
        }
    }
    console.log(`Attacked planets: ${attackedPlanets.length}`);
    attackedPlanets.sort((a, b) => a.localeCompare(b))
        .forEach(planet => console.log(`-> ${planet}`));

    console.log(`Destroyed planets: ${destroyedPlanets.length}`);
    destroyedPlanets.sort((a, b) => a.localeCompare(b))
        .forEach(planet => console.log(`-> ${planet}`))
}

starEnigma([
    '2',
    'STCDoghudd4=63333$D$0A53333',
    'EHfsytsnhf?8555&I&2C9555SR']
)