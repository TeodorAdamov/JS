function pets(input){
    let daysTraveling = Number(input[0]);
    let totalFood = Number(input[1]);
    let DogfoodFor1Day = Number(input[2]);
    let catFoodFor1Day = Number(input[3]);
    let turtleFoodFor1Day = Number(input[4]);

    let foodForAllDays = (DogfoodFor1Day * daysTraveling) + (catFoodFor1Day * daysTraveling) + (turtleFoodFor1Day * daysTraveling / 1000);
    

    if (totalFood >= foodForAllDays) {
        let foodLeft = totalFood - foodForAllDays
        console.log(`${Math.floor(foodLeft)} kilos of food left.`);
    }   else {
        let foodNeeded = foodForAllDays - totalFood
        console.log(`${Math.ceil(foodNeeded)} more kilos of food are needed.`);
    }

}

pets(["5", "10", "2.1", "0.8", "321"]);