function safari (input){
    let budget = Number(input[0]);
    let fuelNeeded = Number(input[1]);
    let dayOfWeek = input[2];

    let moneyForSafari = (fuelNeeded * 2.10) + 100

    if (dayOfWeek === 'Sunday') {
        moneyForSafari *= 0.8;
    } else {
        moneyForSafari *= 0.9;
    }


    if (budget >= moneyForSafari){
        let moneyLeft = budget - moneyForSafari
        console.log(`Safari time! Money left: ${moneyLeft.toFixed(2)} lv.`);
    } else {
        let moneyNeeded = moneyForSafari - budget
        console.log(`Not enough money! Money needed: ${moneyNeeded.toFixed(2)} lv.`);
    }

}

safari(['1000', '10', 'Sunday'])