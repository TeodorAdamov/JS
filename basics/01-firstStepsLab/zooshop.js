function zooshop(input){

    let dogFoodCount = input[0];
    let catFoodCount = input[1];
    let dogFoodPrice = dogFoodCount * Number(2.5);
    let catFoodPrice = catFoodCount * Number(4);
    let finalPrice = dogFoodPrice + catFoodPrice;
    console.log(finalPrice + " lv.")
}

zooshop(["13", "9"]);