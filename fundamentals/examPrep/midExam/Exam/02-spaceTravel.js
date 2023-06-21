function spaceTravel(data) {
    let routeToTitan = data.shift().split("||")
    let fuel = Number(data.shift());
    let ammunition = Number(data.shift());



    for (let i = 0; i < routeToTitan.length; i++) {
        let commandArray = routeToTitan[i].split(' ');
        let command = commandArray[0];


        switch (command) {
            case 'Travel':
                let fuelNeeded = Number(commandArray[1]);
                if (fuel >= fuelNeeded) {
                    console.log(`The spaceship travelled ${fuelNeeded} light-years.`);
                    fuel -= fuelNeeded;
                } else {
                    console.log('Mission failed.');
                    return;
                }
                break;
            case 'Enemy':
                let enemyArmour = Number(commandArray[1]);
                if (ammunition >= enemyArmour) {
                    ammunition -= enemyArmour;
                    console.log(`An enemy with ${enemyArmour} armour is defeated.`);
                } else if (ammunition < enemyArmour && fuel >= 2 * enemyArmour) {
                    fuel -= 2 * enemyArmour;
                    console.log(`An enemy with ${enemyArmour} armour is outmaneuvered.`);
                } else {
                    console.log('Mission failed.');
                    return;
                }
                    break;
            case 'Repair':
                let repairAmount = Number(commandArray[1]);
                fuel += repairAmount;
                ammunition += 2 * repairAmount;
                console.log(`Ammunitions added: ${repairAmount * 2}.`);
                console.log(`Fuel added: ${repairAmount}.`);
                break;
            case 'Titan':
                console.log("You have reached Titan, all passengers are safe.");
                break;

        }
    }
}

spaceTravel(['Travel 10||Enemy 30||Repair 15||Titan', '50', '80'])

console.log('-------------------------');

spaceTravel([ 'Travel 20||Enemy 50||Enemy 50||Enemy 10||Repair 15||Enemy 50||Titan','60','100' ])

