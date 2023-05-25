function ladyBugs(array) {
    let fieldSize = array.shift()
    let ladyBugOnIndex = array.shift().split(" ")
    let ladyBugs = Array(fieldSize).fill(0);

    for (let i = 0; i < ladyBugOnIndex.length; i++) {
        let command = Number(ladyBugOnIndex[i]);

        if (command < 0 || command >= fieldSize) {
            continue;
        }

        ladyBugs[command] = 1;

    }

    for (let i = 0; i < array.length; i++) {
        let arrayOfCommands = array[i].split(" ")
        let fromIndex = Number(arrayOfCommands[0]);
        let command = arrayOfCommands[1];
        let moveByIndex = Number(arrayOfCommands[2]);

        if (ladyBugs[fromIndex] === 0) {
            continue;
        } else if (fromIndex < 0 || fromIndex >= fieldSize) {
            continue;
        }


        if (command === 'right') {
            ladyBugs[fromIndex] = 0

            for (let curIndex = fromIndex + moveByIndex; curIndex < ladyBugs.length; curIndex += moveByIndex) {
                if (ladyBugs[curIndex] === 1) {
                    continue;
                } else if (curIndex < 0 || curIndex >= fieldSize) {
                    break;
                } else {
                    ladyBugs[curIndex] = 1
                    break;
                }
            }

        } else if (command === 'left') {
            ladyBugs[fromIndex] = 0

            for (let curIndex = fromIndex - moveByIndex; curIndex >= 0; curIndex -= moveByIndex) {
                if (ladyBugs[curIndex] === 1) {
                    continue;
                } else if (curIndex < 0 || curIndex >= fieldSize) {
                    break;
                } else {
                    ladyBugs[curIndex] = 1
                    break;
                }
            }
        }
    }


    console.log(ladyBugs.join(" "));

}