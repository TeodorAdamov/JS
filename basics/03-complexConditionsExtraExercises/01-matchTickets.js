function matchTickets(input) {
    let budget = Number(input[0]);
    let ticketType = input[1];
    let peopleCount = Number(input[2]);
    let ticketPrice = 0;
    let transport = 0;


    ticketPrice = ticketType === 'Normal' ? 249.99 : 499.99

    if (peopleCount >= 1 && peopleCount <= 4) {
        transport += 0.75 * budget;
    } else if (peopleCount >= 5 && peopleCount <= 9) {
        transport += 0.6 * budget;
    } else if (peopleCount >= 10 && peopleCount <= 24) {
        transport += 0.5 * budget;
    } else if (peopleCount >= 25 && peopleCount <= 49) {
        transport += 0.4 * budget;
    } else {
        transport += 0.25 * budget;
    }

    let = finalPrice = ticketPrice * peopleCount + transport;

    if (budget >= finalPrice) {
        let moneyLeft = budget - finalPrice;
        console.log(`Yes! You have ${moneyLeft.toFixed(2)} leva left.`);
    } else {
        let moneyNeeded = finalPrice - budget;
        console.log(`Not enough money! You need ${moneyNeeded.toFixed(2)} leva.`);
    }
}

matchTickets(['30000', 'VIP', '49'])