function inventory(arr) {

    let myInventory = arr.shift().split(", ");
    let commandArray = arr.shift().split(" - ");
    let command = commandArray[0];

    while (command !== 'Craft!') {
        switch (command) {
            case 'Collect':
                if (myInventory.includes(commandArray[1])) {
                    break;
                }
                myInventory.push(commandArray[1]);
                break;
            case 'Drop':
                let indexOfItemToRemove = myInventory.indexOf(commandArray[1]);
                if (indexOfItemToRemove === -1) {
                    break;
                }
                myInventory.splice(indexOfItemToRemove, 1);
                break;
            case 'Combine Items':
                let splitted = commandArray[1].split(':');
                if (myInventory.includes(splitted[0])) {
                    let indexOfOldItem = myInventory.indexOf(splitted[0]);
                    myInventory.splice(indexOfOldItem + 1, 0, splitted[1]);
                } else {
                    break;
                }
                break;
            case 'Renew':
                if (myInventory.includes(commandArray[1])) {
                    let indexOfItemToRenew = myInventory.indexOf(commandArray[1]);
                    let itemToAddLast = myInventory.splice(indexOfItemToRenew, 1);
                    myInventory.push(itemToAddLast[0]);
                }
                break;
        }
        commandArray = arr.shift().split(" - ");
        command = commandArray[0];
    }

    console.log(myInventory.join(" "));
}

inventory([
    'Iron, Sword',
    'Drop - Bronze',
    'Combine Items - Sword:Bow',
    'Renew - Iron',
    'Craft!'
])
