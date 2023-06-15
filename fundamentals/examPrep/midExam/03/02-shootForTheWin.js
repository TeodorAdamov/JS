function shootForTheWin(data) {
    let targets = data.shift()
        .split(" ")
        .map(Number);

    let command = data.shift();

    while (command !== 'End') {
        let indexToShoot = Number(command);

        if (indexToShoot >= 0 && indexToShoot < targets.length) {
            let indexValue = targets[indexToShoot];
            if (indexValue >= 0) {
                targets[indexToShoot] = -1;
            }


            for (let i = 0; i < targets.length; i++) {
                if (targets[i] > indexValue) {
                    targets[i] -= indexValue;
                } else if (targets[i] > 0 && targets[i] <= indexValue) {
                    targets[i] += indexValue;
                }

            }
        }



        // "Shot targets: {count} -> {target1} {target2}… {targetn}"

        command = data.shift();
    }

    let shotTargets = 0;
    for (let target of targets) {
        if (target === -1) {
            shotTargets++;
        }
    }

    console.log(`Shot targets: ${shotTargets} -> ${targets.join(' ')}`);

}

shootForTheWin([
    "1 2 3 4 5",
    "Strike 0 1",
    "End"])


