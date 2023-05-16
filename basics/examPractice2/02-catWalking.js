function catWalking(input){
    let minutesPerDay = Number(input[0]);
    let walksPerDay = Number(input[1]);
    let caloriesPerDay = Number(input[2]);

    let totalBurnedCaloriesPerDay = walksPerDay * minutesPerDay * 5;
    let caloriesNeededToBurn = caloriesPerDay * 0.5;

    if (totalBurnedCaloriesPerDay >= caloriesNeededToBurn){
        console.log(`Yes, the walk for your cat is enough. Burned calories per day: ${totalBurnedCaloriesPerDay}.`);
    } else {
        console.log(`No, the walk for your cat is not enough. Burned calories per day: ${totalBurnedCaloriesPerDay}.`);
    }

}

catWalking(['30', '3', '600']);