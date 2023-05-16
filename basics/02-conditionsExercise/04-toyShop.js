
function toyShop(input) {

    // inputs
    let excursionPrice = Number(input[0]);
    let puzzleCount = Number(input[1]);
    let talkingPuppetCount = Number(input[2]);
    let teddyBearCount = Number(input[3]);
    let minionsCount = Number(input[4]);
    let trucksCount = Number(input[5]);

    //prices
    let puzzlesPrice = puzzleCount * 2.6;
    let puppetsPrice = talkingPuppetCount * 3;
    let bearsPrice = teddyBearCount * 4.1;
    let minionsPrice = minionsCount * 8.2;
    let trucksPrice = trucksCount * 2;

    //total price
    let totalPrice = puzzlesPrice + puppetsPrice + bearsPrice + minionsPrice + trucksPrice;

    //total toys
    let totalToysCount = puzzleCount + talkingPuppetCount + teddyBearCount + minionsCount + trucksCount;

    // discount
    if (totalToysCount >= 50) {
        totalPrice = totalPrice * 0.75;
    }
    let totalPriceAfterPayment = totalPrice * 0.9;   // money left after payment for rent
    let moneyLeft = (totalPriceAfterPayment - excursionPrice).toFixed(2);
    let moneyNotEnough = (excursionPrice - totalPriceAfterPayment).toFixed(2);


    if (totalPriceAfterPayment >= excursionPrice) {
        console.log(`Yes! ${moneyLeft} lv left.`);
    } else {
        console.log(`Not enough money! ${moneyNotEnough} lv needed.`);
    }

}

toyShop(["320", "8", "2", "5", "5", "1"])