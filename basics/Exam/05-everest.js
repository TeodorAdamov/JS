function everest(input) {
    let index = 0;
    let command = input[index];
    index++;
    let daysClimbing = 1
    let start = 5364;

    while (command !== 'END') {
        let sleepOrNot = command;
        let metersToClimb = Number(input[index]);
        index++

        if (sleepOrNot === 'Yes') {
            daysClimbing++;
            if (daysClimbing > 5) {
                break;
            }
        }

        if (start >= 8848) {
            break;
        }
        start += metersToClimb;
        command = input[index];
        index++;

    }

    if (start >= 8848) {
        console.log(`Goal reached for ${daysClimbing} days!`);
    } else {
        console.log("Failed!");
        console.log(`${start}`);
    }
}

everest(['Yes',
    '1254',
    'Yes',
    '1402',
    'No',
    '250',
    'Yes',
    '635'])