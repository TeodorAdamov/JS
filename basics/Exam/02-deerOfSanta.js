function deerOfSanta(input){
    let daysMissing = Number(input[0]);
    let foodLeftInKg = Number(input[1]);
    let foodPerDay1 = Number(input[2]);
    let foodPerDay2 = Number(input[3]);
    let foodPerDay3 = Number(input[4]);

    let totalFoodNeeded = (daysMissing * foodPerDay1) + (daysMissing * foodPerDay2) + (daysMissing * foodPerDay3);

    if (foodLeftInKg >= totalFoodNeeded) {
        let foodLeft = foodLeftInKg - totalFoodNeeded
        console.log(`${Math.floor(foodLeft)} kilos of food left.`);
    } else {
        let foodNeeded = totalFoodNeeded - foodLeftInKg;
        console.log(`${Math.ceil(foodNeeded)} more kilos of food are needed.`);
    }

}

deerOfSanta([
    '2',
    '10',
    '1',
    '1',
    '2',
    ])