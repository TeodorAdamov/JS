function race(data) {

    let participants = data.shift().split(', ')
    let namePattern = /[A-Za-z]/g
    let distancePattern = /\d/g

    let racers = [];

    for (let line of data) {
        if (line === 'end of race') {
            break;
        }

        let name = line.match(namePattern).join('')
        let distance = line.match(distancePattern)
            .map(Number)
            .reduce((a, b) => a + b);

        if (participants.includes(name)) {
            let isExisting = racers.find(racer => racer.name === name)
            if (isExisting) {
                isExisting.distance += distance;
            } else {
                let racer = {
                    name,
                    distance: Number(distance)
                }
                racers.push(racer)
            }

        }
    }
    racers.sort((a, b) => b.distance - a.distance)
    console.log(`1st place: ${racers[0].name}`);
    console.log(`2nd place: ${racers[1].name}`);
    console.log(`3rd place: ${racers[2].name}`);
}

race(['George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@ ',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G4e@55or%6g6!68e!!@ ',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race'])