function treasureHunt(data) {
    let treasureChest = data.shift().split('|');
    let commandsArray = data.shift().split(" ");
    let command = commandsArray.shift();

    while (command !== 'Yohoho!') {

        switch (command) {
            case 'Loot':
                for (let el of commandsArray) {
                    if (treasureChest.includes(el)) {
                        continue;
                    } else {
                        treasureChest.unshift(el)
                    }
                }
                break;
            case 'Drop':
                let indexToRemove = Number(commandsArray[0])
                if (indexToRemove < 0 || indexToRemove > treasureChest.length) {
                    break;
                } else {
                    let removed = treasureChest.splice(indexToRemove, 1).toString();
                    treasureChest.push(removed);
                }
                break;
            case 'Steal':
                let indexToSteal = Number(commandsArray[0])
                let stolen = treasureChest.splice(-indexToSteal)
                console.log(stolen.join(", "));
                break;
        }

        commandsArray = data.shift().split(" ");
        command = commandsArray.shift();
    }

    let itemCount = treasureChest.length
    let treasureLength = treasureChest.join("").length
    let result = treasureLength / itemCount;

    if (treasureChest.length <= 0) {
        console.log(`Failed treasure hunt.`);
    } else {
        console.log(`Average treasure gain: ${result.toFixed(2)} pirate credits.`);
    }
}


treasureHunt(["Diamonds|Silver|Shotgun|Gold",
"Loot Silver Medals Coal",
"Drop -1",
"Drop 1",
"Steal 2",
"Yohoho!"])

