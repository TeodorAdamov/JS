function manOWar(data) {

    let pirateShipStatus = data.shift().split(">").map(Number);
    let warShipStatus = data.shift().split(">").map(Number);


    const maxHP = Number(data.shift());
    let commandArray = data.shift().split(" ");
    let command = commandArray.shift();

    while (command !== 'Retire') {
        switch (command) {
            case 'Fire':
                let fireIndex = Number(commandArray[0]);
                let fireDamage = Number(commandArray[1]);
                if (fireIndex < 0 || fireIndex >= warShipStatus.length) {
                    break;
                } else {
                    warShipStatus[fireIndex] -= fireDamage;
                    if (warShipStatus[fireIndex] <= 0) {
                        console.log(`You won! The enemy ship has sunken.`);
                        return;
                    }
                }
                break;
            case 'Defend':
                let startIndex = Number(commandArray[0]);
                let endIndex = Number(commandArray[1]);
                let defendDamage = Number(commandArray[2]);
                if (startIndex < 0 || startIndex >= pirateShipStatus.length) {
                    break;
                } else if (endIndex < 0 || endIndex >= pirateShipStatus.length) {
                    break;
                }
                for (let i = startIndex; i <= endIndex; i++) {
                    pirateShipStatus[i] -= defendDamage;
                    if (pirateShipStatus[i] <= 0) {
                        console.log(`You lost! The pirate ship has sunken.`);
                        return;
                    }
                }
                break;
            case 'Repair':
                let repairIndex = Number(commandArray[0]);
                let repairHealth = Number(commandArray[1]);
                if (repairIndex < 0 || repairIndex >= pirateShipStatus.length) {
                    break;
                }
                pirateShipStatus[repairIndex] += repairHealth;
                if (pirateShipStatus[repairIndex] >= maxHP) {
                    pirateShipStatus[repairIndex] = maxHP;
                }
                break;
            case 'Status':
                let needRepair = maxHP * 0.2;
                let count = 0;
                for (let i = 0; i < pirateShipStatus.length; i++) {
                    if (pirateShipStatus[i] < needRepair) {
                        count++;
                    }
                }
                console.log(`${count} sections need repair.`);
                break;
        }
        commandArray = data.shift().split(" ");
        command = commandArray.shift();
    }
    let pirateShipSum = 0;
    let warShipSum = 0;
    for (let el of pirateShipStatus) {
        pirateShipSum += el
    }
    for (let el of warShipStatus) {
        warShipSum += el
    }

    console.log(`Pirate ship status: ${pirateShipSum}`);
    console.log(`Warship status: ${warShipSum}`);
}

manOWar(["2>3>4>5>2",
    "6>7>8>9>10>11",
    "20",
    "Status",
    "Fire 2 3",
    "Defend 0 4 11",
    "Repair 3 18",
    "Retire"])

