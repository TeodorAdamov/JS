function bestPlayer(input) {
    let index = 0;
    let command = input[index]
    index++;
    let mostGoals = 0;
    let playerWithMostGoals = '';

    while (command !== 'END') {
        let playerName = command;
        let playerGoals = Number(input[index])
        index++;
        if (playerGoals > mostGoals) {
            mostGoals = playerGoals;
            playerWithMostGoals = playerName;
        }

        if (playerGoals >= 10) {
            break;
        }


        command = input[index];
        index++;
    }

    console.log(`${playerWithMostGoals} is the best player!`);
    if (mostGoals >= 3) {
        console.log(`He has scored ${mostGoals} goals and made a hat-trick !!!`);
    } else {
        console.log(`He has scored ${mostGoals} goals.`);
    }

}

bestPlayer([
    "Silva",
    "5",
    "Harry Kane",
    "10"])