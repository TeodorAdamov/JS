function movie(input) {
    let movieBudget = Number(input[0]);
    let personsCount = Number(input[1]);
    let costumePrice = Number(input[2]);
    let decorationPrice = movieBudget * 0.1;
    let totalCostumePrice = personsCount * costumePrice;


    if (personsCount > 150) {
        totalCostumePrice *= 0.9;
    }

    let totalCost = decorationPrice + totalCostumePrice;

    if (totalCost > movieBudget) {
        let moneyNeeded = totalCost - movieBudget;
        console.log("Not enough money!");
        console.log(`Wingard needs ${moneyNeeded.toFixed(2)} leva more.`);


    } else {
        let moneyLeft = movieBudget - totalCost
        console.log("Action!");
        console.log(`Wingard starts filming with ${moneyLeft.toFixed(2)} leva left.`);
   }
}

movie(["9587.88","222","55.68"])