function counterStrike(data) {
    let energy = Number(data.shift());
    let wonBattles = 0;
    let command = data.shift();

    while (command !== "End of battle") {
        let energyNeededToReachEnemy = Number(command);
        if (energy >= energyNeededToReachEnemy) {
            energy -= energyNeededToReachEnemy;
            wonBattles++;
            if (wonBattles % 3 === 0) {
                energy += wonBattles
            }
        } else if (energy < energyNeededToReachEnemy) {
            console.log(`Not enough energy! Game ends with ${wonBattles} won battles and ${energy} energy`);
            return;
        }

        command = data.shift();
    }



    console.log(`Won battles: ${wonBattles}. Energy left: ${energy}`);

}
counterStrike(["200",
    "54",
    "14",
    "28",
    "13",
    "End of battle"])

