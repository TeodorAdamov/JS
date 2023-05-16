function fishingBoat(input){
    let budget = Number(input[0]);
    let season = input[1];
    let fishermenCount = Number(input[2]);
    let finalPrice = 0;

    switch (season){
        case 'Spring':
            finalPrice = 3000;        
            break;
        case 'Summer':
        case 'Autumn':
            finalPrice = 4200;        
            break;
        case 'Winter':
            finalPrice = 2600;
            break;
    }
    if (fishermenCount <= 6){
        finalPrice *= 0.9;
    } else if (fishermenCount <= 11){
        finalPrice *= 0.85;
    } else {
        finalPrice *= 0.75;
    }

    if (fishermenCount % 2 === 0 && (season === 'Spring' || season === 'Summer' || season === 'Winter')){
        finalPrice *= 0.95;
    }

    if (budget >= finalPrice){
        let moneyLeft = budget - finalPrice;
        console.log(`Yes! You have ${moneyLeft.toFixed(2)} leva left.`);
    } else {
        let moneyNeeded = finalPrice - budget;
        console.log(`Not enough money! You need ${moneyNeeded.toFixed(2)} leva.`);
    }

}

fishingBoat(["3000",

"Summer",

"11"]);