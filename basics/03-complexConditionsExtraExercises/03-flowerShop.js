function flowerShop(input) {
    let hrisantemaCount = Number(input[0]);
    let rosesCount = Number(input[1]);
    let tulipsCount = Number(input[2]);
    let season = input[3];
    let isHoliday = input[4];
    let flowerCount = hrisantemaCount + rosesCount + tulipsCount;
    let hrisantemaPrice = 0;
    let rosesPrice = 0;
    let tulipsPrice = 0;

    switch (season) {
        case 'Spring':
        case 'Summer':
            hrisantemaPrice = 2;
            rosesPrice = 4.1;
            tulipsPrice = 2.5;
            break;
        case 'Autumn':
        case 'Winter':
            hrisantemaPrice = 3.75;
            rosesPrice = 4.5;
            tulipsPrice = 4.15;
            break;

    }

    let finalPrice = (hrisantemaCount * hrisantemaPrice) + (rosesCount * rosesPrice) + (tulipsCount * tulipsPrice);
    if (isHoliday === 'Y') {
        finalPrice *= 1.15;
    }

    if (tulipsCount > 7 && season === 'Spring') {
        finalPrice *= 0.95;
    }

    if (rosesCount >= 10 && season === 'Winter') {
        finalPrice *= 0.9;
    }
    if (flowerCount > 20){
        finalPrice *= 0.8;
    }

    console.log((finalPrice + 2).toFixed(2));
}




flowerShop(['10', '10', '10', 'Autumn', 'N']);