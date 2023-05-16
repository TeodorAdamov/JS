function touristShop(input) {
    let budget = Number(input[0]);
    let index = 1;
    let command = input[index];
    index++;
    let productsBought = 0;
    let total = 0;

    while (command !== 'Stop') {
        let productPrice = Number(input[index]);
        index++
        if (budget < 0) {
            console.log("You don't have enough money!");
            console.log(`You need ${Math.abs(budget).toFixed(2)} leva!`);
            return;
        }
        productsBought++;

        if (productsBought % 3 === 0) {
            budget -= productPrice * 0.5;
            total += productPrice * 0.5;
        } else {
            budget -= productPrice;
            total += productPrice
        }

        command = input[index];
        index++;
    }
    console.log(`You bought ${productsBought} products for ${total.toFixed(2)} leva.`);

}

touristShop([
    '54',
    'Thermal underwear',
    '24',
    'Sunscreen',
    '45',
])