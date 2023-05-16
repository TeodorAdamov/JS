function flowerShop(input){
    let magnoliqCount = Number(input[0]);
    let ziumbiulCount = Number(input[1]);
    let rosesCount = Number(input[2]);
    let kaktusCount = Number(input[3]);
    let giftPrice = Number(input[4]);

    // тя плаща 5 % от парите за данъци
    let totalMoneyMadeAfterTaxes = ((magnoliqCount * 3.25) + (ziumbiulCount * 4) + (rosesCount * 3.5) + (kaktusCount * 8)) * 0.95

    if (totalMoneyMadeAfterTaxes >= giftPrice) {
        let moneyLeft = totalMoneyMadeAfterTaxes - giftPrice;
        console.log(`She is left with ${Math.floor(moneyLeft)} leva.`);
    }   else {
        let moneyNeeded = giftPrice - totalMoneyMadeAfterTaxes
        console.log(`She will have to borrow ${Math.ceil(moneyNeeded)} leva.`);
    }

}

flowerShop(["15", "7", "5", "10", "100"]);