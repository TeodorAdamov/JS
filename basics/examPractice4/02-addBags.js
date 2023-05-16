function addBags(input) {
    let over20KgPrice = Number(input[0]);
    let baggageKg = Number(input[1]);
    let daysTillTravel = Number(input[2]);
    let baggageCount = Number(input[3]);
    let totalPrice = 0;

    if (baggageKg < 10) {
        totalPrice += over20KgPrice * 0.2;
    } else if (baggageKg >= 10 && baggageKg <= 20) {
        totalPrice += over20KgPrice * 0.5;
    } else {
        totalPrice += over20KgPrice;
    }

    if (daysTillTravel > 30) {
        totalPrice *= 1.1;
    } else if (daysTillTravel >= 7 && daysTillTravel <= 30) {
        totalPrice *= 1.15;
    } else {
        totalPrice *= 1.4;
    }

    console.log(`The total price of bags is: ${(totalPrice * baggageCount).toFixed(2)} lv.`);

}

addBags(['30', '18', '15', '2']);