function catDiet(input) {
    let fatPercent = Number(input[0]);
    let proteinPercent = Number(input[1]);
    let carbsPercent = Number(input[2]);
    let totalCalories = Number(input[3]);
    let waterPercent = Number(input[4]);

    let fatGrams = (fatPercent / 100) * totalCalories / 9;
    let proteinGrams = (proteinPercent / 100) * totalCalories / 4;
    let carbsGrams = (carbsPercent / 100) * totalCalories / 4;

    let foodWeight = fatGrams + proteinGrams + carbsGrams;
    let caloriesInEachGramFood = totalCalories / foodWeight
    let caloriesPercentLeft = 100 - waterPercent;
    let caloriesWithoutWater = caloriesInEachGramFood * caloriesPercentLeft / 100
    console.log(caloriesWithoutWater.toFixed(4));

}

catDiet([
    '60',
    '25',
    '15',
    '2500',
    '60'])