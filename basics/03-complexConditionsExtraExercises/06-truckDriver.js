function truckDriver(input){
    let season = input[0];
    let kmMonthly = Number(input[1]);
    let price = 0;

    switch (season){
        case 'Spring':
        case 'Autumn':
            if (kmMonthly <= 5000){
                price = ((kmMonthly * 0.75) * 4) * 0.9;
            } else if (kmMonthly > 5000 && kmMonthly <= 10000){
                price = ((kmMonthly * 0.95) * 4) * 0.9;
            } else {
                price = ((kmMonthly * 1.45) * 4) * 0.9;
            }
            break;
        case 'Summer':
            if (kmMonthly <= 5000){
                price = ((kmMonthly * 0.9) * 4) * 0.9;
            } else if (kmMonthly > 5000 && kmMonthly <= 10000){
                price = ((kmMonthly * 1.1) * 4) * 0.9;
            } else {
                price = ((kmMonthly * 1.45) * 4) * 0.9;
            }
            break;
        case 'Winter':
            if (kmMonthly <= 5000){
                price = ((kmMonthly * 1.05) * 4) * 0.9;
            } else if (kmMonthly > 5000 && kmMonthly <= 10000){
                price = ((kmMonthly * 1.25) * 4) * 0.9;
            } else {
                price = ((kmMonthly * 1.45) * 4) * 0.9;
            }
            break;
    }
    console.log(price.toFixed(2));


}

truckDriver(['Summer', '3455'])