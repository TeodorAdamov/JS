function energyBooster(input) {
    let fruit = input[0];
    let size = input[1];
    let count = Number(input[2]);
    let total = 0;

    switch (fruit) {
        case 'Watermelon':
            if (size === 'big'){
                total += (28.70 * 5) * count
            } else {
                total += (56 * 2) * count
            }
            break;
        case 'Mango':
            if (size === 'big'){
                total += (19.60 * 5) * count
            } else {
                total += (36.66 * 2) * count
            }
            break;
        case 'Pineapple':
            if (size === 'big'){
                total += (24.8 * 5) * count
            } else {
                total += (42.1 * 2) * count
            }
            break;
        case 'Raspberry':
            if (size === 'big'){
                total += (15.2 * 5) * count
            } else {
                total += (20 * 2) * count
            }
            break;

    }
    
    if (total >= 400 && total <= 1000){
        total *= 0.85;
    } else if (total > 1000){
        total *= 0.5;
    }

    console.log(`${total.toFixed(2)} lv.`);
}

energyBooster(['Watermelon', 'big', '4']);

