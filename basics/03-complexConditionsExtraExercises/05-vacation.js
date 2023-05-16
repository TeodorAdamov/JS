function vacation(input){
    let budget = Number(input[0]);
    let season = input[1];
    let place = '';
    let price = 0;
    let location = '';
    
    location = season === 'Summer' ? 'Alaska' : 'Morocco';

    if (budget <= 1000){
        place = 'Camp';
        if (season === 'Summer'){     
            price = 0.65 * budget;
        } else {
            price = 0.45 * budget
        }
    } else if (budget > 1000 && budget <= 3000){
        place = 'Hut';
        if (season === 'Summer'){
            price = 0.8 * budget;
        } else {
            price = 0.6 * budget;
        }
    } else {
        place = 'Hotel';
        price = 0.9 * budget;
    }

    console.log(`${location} - ${place} - ${price.toFixed(2)}`);

}

vacation(['3460', 'Summer'])