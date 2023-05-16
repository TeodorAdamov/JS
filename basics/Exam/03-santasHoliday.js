function skiTrip(input) {
    let days = Number(input[0]);
    let roomType = input[1];
    let feedback = input[2];

    let nights = days - 1;
    let finalPrice = 0;

    switch (roomType) {
        case 'room for one person':
            finalPrice += nights * 18;
            break;
        case 'apartment':
            finalPrice += nights * 25;
            if (nights < 10) {
                finalPrice *= 0.7;
            } else if (nights >= 10 && nights <= 15) {
                finalPrice *= 0.65;
            } else {
                finalPrice *= 0.5;
            }
            break;
        case 'president apartment':
            finalPrice += nights * 35;
            if (nights < 10) {
                finalPrice *= 0.9;
            } else if (nights >= 10 && nights <= 15) {
                finalPrice *= 0.85;
            } else {
                finalPrice *= 0.8;
            }
            break;
    }

    if(feedback === 'positive') {
        finalPrice *= 1.25;
    } else {
        finalPrice *= 0.9;
    }

    console.log(finalPrice.toFixed(2));

}

skiTrip(["30",

"president apartment",

"negative"])