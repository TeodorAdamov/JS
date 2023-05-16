function  foodForPets(input){
    let daysCount = Number(input.shift());
    let food = Number(input.shift());
    let totalBiscuits = 0;
    let dogFoodEaten = 0;
    let catFoodEaten = 0;

    for (let i = 1; i <= daysCount; i++){
        let dogFood = Number(input.shift());
        let catFood = Number(input.shift());
        dogFoodEaten += dogFood;
        catFoodEaten += catFood;

        if (i % 3 === 0){
            totalBiscuits += (dogFood + catFood) * 0.1;
        }
    }
    let foodEatenTotal = ((dogFoodEaten + catFoodEaten) / food) * 100;
    let eatenByDog = (dogFoodEaten / (dogFoodEaten + catFoodEaten)) * 100;
    let eatenByCat = (catFoodEaten / (dogFoodEaten + catFoodEaten)) * 100;

    console.log(`Total eaten biscuits: ${Math.round(totalBiscuits)}gr.`);
    console.log(`${foodEatenTotal.toFixed(2)}% of the food has been eaten.`);
    console.log(`${eatenByDog.toFixed(2)}% eaten from the dog.`);
    console.log(`${eatenByCat.toFixed(2)}% eaten from the cat.`);

}

foodForPets(['3', '1000', '300', '20', '100', '30', '110', '40']);
