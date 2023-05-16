function journey(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let finalPrice = 0;
    let destination = '';
    let campOrHotel = '';

    if (budget <= 100) {
        destination = 'Bulgaria';
        if (season === 'summer') {
            campOrHotel = 'Camp'
            finalPrice = budget * 0.3;
        } else {
            finalPrice = budget * 0.7;
            campOrHotel = 'Hotel';
        }
    } else if (budget <= 1000) {
        destination = 'Balkans';
        if (season === 'summer') {
            finalPrice = budget * 0.4;
            campOrHotel = 'Camp';
        } else {
            finalPrice = budget * 0.8;
            campOrHotel = 'Hotel';
        }
    } else {
        destination = 'Europe';
        finalPrice = budget * 0.9;
        campOrHotel = 'Hotel';
    }

    console.log(`Somewhere in ${destination}`);
    console.log(`${campOrHotel} - ${finalPrice.toFixed(2)}`);

}

journey(['50', 'summer']);