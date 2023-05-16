function aluminiumJoinery(input){
    let windowsCount = Number(input[0]);
    let windowsType = input[1];
    let isDelivery = input[2];
    let total = 0;

    switch (windowsType){
        case '90X130':
            if (windowsCount < 10){
                console.log('Invalid order');
                return;
            } else if (windowsCount >= 10 && windowsCount <= 30){
                total += windowsCount * 110
            } else if (windowsCount > 30 && windowsCount <= 60){
                total += (windowsCount * 110) * 0.95; 
            } else {
                total += (windowsCount * 110) * 0.92;
            }
            break;
        case '100X150':
            if (windowsCount < 10){
                console.log('Invalid order');
                return;
            } else if (windowsCount >= 10 && windowsCount <= 40){
                total += windowsCount * 140
            } else if (windowsCount > 40 && windowsCount <= 80){
                total += (windowsCount * 140) * 0.94; 
            } else {
                total += (windowsCount * 140) * 0.9;
            }
            break;
        case '130X180':
            if (windowsCount < 10){
                console.log('Invalid order');
                return;
            } else if (windowsCount >= 10 && windowsCount <= 20){
                total += windowsCount * 190
            } else if (windowsCount > 20 && windowsCount <= 50){
                total += (windowsCount * 190) * 0.93; 
            } else {
                total += (windowsCount * 190) * 0.88;
            }
            break;
        case '200X300':
            if (windowsCount < 10){
                console.log('Invalid order');
                return;
            } else if (windowsCount >= 10 && windowsCount <= 25){
                total += windowsCount * 250
            } else if (windowsCount > 25 && windowsCount <= 50){
                total += (windowsCount * 250) * 0.91; 
            } else {
                total += (windowsCount * 250) * 0.86;
            }
            break;

    }

    if (isDelivery === 'With delivery') {
        total += 60
    }

    if (windowsCount > 99){
        total *= 0.96
    }

    console.log(`${total.toFixed(2)} BGN`);

}

aluminiumJoinery(["40", "90X130", "Without delivery"])