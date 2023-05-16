function carToGo(input){
    let budget = Number(input[0]);
    let season = input[1];
    let carPrice = 0;

    if (budget <= 100){
        console.log('Economy class');
        if (season === 'Summer'){
            carPrice = 0.35 * budget;
            console.log(`Cabrio - ${carPrice.toFixed(2)}`);
        } else {
            carPrice = 0.65 * budget;
            console.log(`Jeep - ${carPrice.toFixed(2)}`);
        }
    } else if (budget > 100 && budget <= 500){
        console.log('Compact class');
        if (season === 'Summer'){
            carPrice = 0.45 * budget;
            console.log(`Cabrio - ${carPrice.toFixed(2)}`);
        } else {
            carPrice = 0.8 * budget;
            console.log(`Jeep - ${carPrice.toFixed(2)}`);
        }
    } else {
        console.log('Luxury class');
        carPrice = 0.9 * budget;
        console.log(`Jeep - ${carPrice.toFixed(2)}`);             
    }

}

carToGo(['1010', 'Summer'])