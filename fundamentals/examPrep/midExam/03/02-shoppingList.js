function shoppingList(data) {
    let myList = data.shift().split("!");

    let commandArray = data.shift().split(" ");
    let command = commandArray[0];

    while (command !== 'Go') {

        switch (command) {
            case 'Urgent':
                if (!myList.includes(commandArray[1])) {
                    myList.unshift(commandArray[1]);
                }
                break;
            case 'Unnecessary':
                if (myList.includes(commandArray[1])) {
                    let indexOfItemToRemove = myList.indexOf(commandArray[1]);
                    myList.splice(indexOfItemToRemove, 1)
                }
                break;
            case 'Correct':
                if (myList.includes(commandArray[1])) {
                    let indexOfItemToReplace = myList.indexOf(commandArray[1]);
                    myList[indexOfItemToReplace] = commandArray[2];
                }
                break;
            case 'Rearrange':
                if (myList.includes(commandArray[1])) {
                    let indexOfItemToRem = myList.indexOf(commandArray[1]);
                    let itemToPush = myList.splice(indexOfItemToRem, 1);
                    myList.push(itemToPush)
                }
                break;
        }
        commandArray = data.shift().split(" ");
        command = commandArray[0];
    }


    console.log(myList.join(", "));

}

shoppingList(["Milk!Pepper!Salt!Water!Banana",
"Urgent Salt",
"Unnecessary Grapes",
"Correct Pepper Onion",
"Rearrange Grapes",
"Correct Tomatoes Potatoes",
"Go Shopping!"])

