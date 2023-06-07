function arrayManipulation(arrayOfCommands) {

    let arr = arrayOfCommands
        .shift()
        .split(" ")
        .map(Number)

    for (let element of arrayOfCommands) {
        let arrayCommand = element.split(" ")
        let command = arrayCommand[0];
        let firstNum = Number(arrayCommand[1]);
        let secondNum = Number(arrayCommand[2]);

        switch (command) {
            case "Add":
                addToTheEnd(firstNum);
                break;
            case "Remove":
                removeAllOccurrences(firstNum);
                break;
            case "RemoveAt":
                removeAtIndex(firstNum);
                break;
            case "Insert":
                insertAtIndex(firstNum, secondNum);
                break;

        }
    }
    function addToTheEnd(n) {
        return arr.push(n)
    }

    function removeAllOccurrences(n) {
        return arr = arr.filter(el => el !== n)
    }

    function removeAtIndex(n) {
        return arr.splice(n, 1)
    }

    function insertAtIndex(number, index) {
        return arr.splice(index, 0, number)
    }

    console.log(arr.join(" "));

}

arrayManipulation([
    '4 19 2 53 6 43',
    'Add 3',
    'Remove 2',
    'RemoveAt 1',
    'Insert 8 3'])