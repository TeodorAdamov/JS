function foodDelivery(input){
    let chickenMenuCount = Number(input[0]);
    let fishMenuCount = Number(input[1]);
    let veganMenuCount = Number(input[2]);

    let chickenMenuPrice = chickenMenuCount * 10.35;
    let fishMenuPrice = fishMenuCount * 12.40;
    let veganMenuPrice = veganMenuCount * 8.15;
    let finalMenuPrice = chickenMenuPrice + fishMenuPrice + veganMenuPrice
    let dessertPrice = finalMenuPrice * 0.2;
    
    let finalPrice = finalMenuPrice + dessertPrice + 2.50;

    console.log(finalPrice);

}

foodDelivery(["2","4","3"]);