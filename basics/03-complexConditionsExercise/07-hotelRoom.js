function hotelRoom(input) {
    let month = input[0];
    let nightsCount = Number(input[1]);
    let studioPrice = 0;
    let apartmentPrice = 0;

    switch (month) {
        case 'May':
        case 'October':
            studioPrice = nightsCount * 50;
            apartmentPrice = nightsCount * 65;
            if (nightsCount > 7 && nightsCount <= 14) {
                studioPrice *= 0.95;
            } else if (nightsCount > 14) {
                studioPrice *= 0.7;
            }
            break;
        case 'June':
        case 'September':
            studioPrice = nightsCount * 75.2;
            apartmentPrice = nightsCount * 68.7;
            if (nightsCount > 14) {
                studioPrice *= 0.8;
            }
            break;
        case 'July':
        case 'August':
            studioPrice = nightsCount * 76;
            apartmentPrice = nightsCount * 77;
            break;
    }
    if (nightsCount > 14) {
        apartmentPrice *= 0.9;
    }
    console.log(`Apartment: ${apartmentPrice.toFixed(2)} lv.`);
    console.log(`Studio: ${studioPrice.toFixed(2)} lv.`);
}

hotelRoom(['May', '15']);