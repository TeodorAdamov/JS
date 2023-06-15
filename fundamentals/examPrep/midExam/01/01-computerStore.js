function computerStore(data) {
    let command = data.shift();
    let taxes = 0;
    let priceWithoutTaxes = 0;

    while(command !== 'special' && command !== 'regular') {
        let price = Number(command)

        if(price < 0) {
            console.log('Invalid price!');
        } else {
            priceWithoutTaxes  += price;
            taxes += 0.2 * price;
        }
        command = data.shift();
    }

    if(priceWithoutTaxes === 0) {
        console.log("Invalid order!");
    } else {
        console.log("Congratulations you've just bought a new computer!");
        console.log(`Price without taxes: ${priceWithoutTaxes.toFixed(2)}$`);
        console.log(`Taxes: ${taxes.toFixed(2)}$`);
        console.log("-----------");
        if(command === 'special') {
            let discountedPrice = (priceWithoutTaxes + taxes) * 0.9;
            console.log(`Total price: ${discountedPrice.toFixed(2)}$`);
        } else {
            console.log(`Total price: ${(priceWithoutTaxes + taxes).toFixed(2)}$`);
        }
    }

}

computerStore([
    '1050',
    '200',
    '450',
    '2',
    '18.50',
    '16.86',
    'special'
])
