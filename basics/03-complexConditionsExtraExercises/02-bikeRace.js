function bikeRace(input){
    let junioursCount = Number(input[0]);
    let seniorsCount = Number(input[1]);
    let raceType = input[2];  
    let finalPrice = 0;


    switch (raceType){
        case 'trail':
            finalPrice = (junioursCount * 5.5) + (seniorsCount * 7);
            break;
        case 'cross-country':
            finalPrice = (junioursCount * 8) + (seniorsCount * 9.5);   
            if (junioursCount + seniorsCount >= 50){
                finalPrice *= 0.75;
            }
            break;
        case 'downhill':
            finalPrice = (junioursCount * 12.25) + (seniorsCount * 13.75);
            break;
        case 'road':
            finalPrice = (junioursCount * 20) + (seniorsCount * 21.50);
            break;
        }
        finalPrice *= 0.95; 
        
        console.log(finalPrice.toFixed(2));


}

bikeRace(['21', '26', 'cross-country']);