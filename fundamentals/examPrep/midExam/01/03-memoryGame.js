function memoryGame(data) {
    let sequence = data.shift().split(' ');

    let commandArray = data.shift().split(' ');
    let command = commandArray[0];
    let moves = 0;

    while (command !== 'end') {
        moves++
        let firstIndex = Number(commandArray[0]);
        let secondIndex = Number(commandArray[1]);

        if (firstIndex === secondIndex || (firstIndex < 0 || firstIndex >= sequence.length) || (secondIndex < 0 || secondIndex >= sequence.length)) {
            let spliceStart = sequence.length / 2;
            sequence.splice(spliceStart, 0, `-${moves}a`);
            sequence.splice(spliceStart, 0, `-${moves}a`);
            console.log("Invalid input! Adding additional elements to the board");
        } else if (sequence[firstIndex] === sequence[secondIndex]) {
            let element = sequence[firstIndex]
            sequence.splice(firstIndex, 1);
            let indexOfElement = sequence.indexOf(element)
            sequence.splice(indexOfElement, 1);
            console.log(`Congrats! You have found matching elements - ${element}!`);
        } else {
            console.log("Try again!");
        }

        if (sequence[0] === undefined) {
            console.log(`You have won in ${moves} turns!`);
            return;
        }

        commandArray = data.shift().split(' ');
        command = commandArray[0];
    }

    if (sequence[0] === undefined) {
        console.log(`You have won in ${moves} turns!`);
    } else {
        console.log("Sorry you lose :(");
        console.log(sequence.join(' '));
    }
}

memoryGame([
    "1 1 2 2 3 3 4 4 5 5",
    "1 0",
    "-1 0",
    "1 0",
    "1 0",
    "1 0",
    "end"
]
)
