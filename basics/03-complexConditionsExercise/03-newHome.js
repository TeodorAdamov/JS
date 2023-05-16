function newHome(input){
    let flowerType = input[0];
    let flowerCount = Number(input[1]);
    let budget = Number(input[2]);
    let finalPrice = 0;

    switch (flowerType){
        case 'Roses':
            finalPrice += flowerCount * 5;
            if (flowerCount > 80){
                finalPrice *= 0.9;
            }
            break;
        case 'Dahlias':
            finalPrice += flowerCount * 3.8;
            if (flowerCount > 90){
                finalPrice *= 0.85;
            }
            break;
        case 'Tulips':
            finalPrice += flowerCount * 2.8;
            if (flowerCount > 80){
                finalPrice *= 0.85;
            }
            break;
        case 'Narcissus':
            finalPrice += flowerCount * 3;
            if (flowerCount < 120){
                finalPrice *= 1.15;
            }
            break;
        case 'Gladiolus':
            finalPrice += flowerCount * 2.5;
            if (flowerCount < 80){
                finalPrice *= 1.2;
            }
            break;             
    }

    if (budget >= finalPrice){
        let moneyLeft = budget - finalPrice;
        console.log(`Hey, you have a great garden with ${flowerCount} ${flowerType} and ${moneyLeft.toFixed(2)} leva left.`);
    } else {
        let moneyNeeded = finalPrice - budget;
        console.log(`Not enough money, you need ${moneyNeeded.toFixed(2)} leva more.`);
    }

}

newHome(["Roses", "55", "250"])