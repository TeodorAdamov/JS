function movingTarget(data) {
    let targets = data.shift().split(' ').map(a => Number(a));

    let commandArray = data.shift().split(' ');
    let command = commandArray.shift();

    while (command !== 'End') {
        switch (command) {
            case 'Shoot':
                let indexToShoot = Number(commandArray[0]);
                let shootPower = Number(commandArray[1]);
                if (indexToShoot >= 0 && indexToShoot < targets.length) {
                    targets[indexToShoot] -= shootPower;
                    if (targets[indexToShoot] <= 0) {
                        targets.splice(indexToShoot, 1)
                    }
                }
                break;
            case 'Add':
                let indexToAdd = Number(commandArray[0]);
                let valueToAdd = Number(commandArray[1]);
                if (indexToAdd >= 0 && indexToAdd < targets.length) { // = maybe ???
                    targets.splice(indexToAdd, 0, valueToAdd)  //indextoadd moje da trqbva da e -1 shte proverim
                } else {
                    console.log("Invalid placement!");
                }
                break;
            case 'Strike':
                let indexToStrike = Number(commandArray[0]);
                let strikeRadius = Number(commandArray[1])
                let spliceStart = indexToStrike - strikeRadius;
                let spliceEnd = strikeRadius * 2 + 1;
                if (indexToStrike > 0 && indexToStrike < targets.length) {
                    if (spliceEnd > 0 && (indexToStrike + strikeRadius < targets.length)) {
                        targets.splice(spliceStart, spliceEnd)
                    } else {
                        console.log("Strike missed!");
                    }

                } else {
                    console.log("Strike missed!");
                }
                break;
        }
        commandArray = data.shift().split(' ');
        command = commandArray.shift();
    }

    console.log(targets.join('|'));
}

movingTarget([
    "52 74 23 44 96 110",
    "Shoot 5 10",
    "Shoot 1 80",
    "Strike 2 1",
    "Add 1 30",
    "End"])


