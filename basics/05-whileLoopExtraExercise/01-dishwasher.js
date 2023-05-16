function dishwasher(input) {
    let detergent = Number(input[0]) * 750;
    let index = 1;
    let dishes = 0;
    let pots = 0;

    while (input[index] !== 'End') {
        let entry = Number(input[index]);
        if (detergent < 0){
            break;
        }

        if (index % 3 === 0) {
            detergent -= entry * 15;
            pots += entry;
        } else {
            detergent -= entry * 5;
            dishes += entry;
        }

        index++;

    }
    if (detergent >= 0) {
        console.log(`Detergent was enough!`);
        console.log(`${dishes} dishes and ${pots} pots were washed.`);
        console.log(`Leftover detergent ${detergent} ml.`);
    } else {
        console.log(`Not enough detergent, ${Math.abs(detergent)} ml. more necessary!`);
    }
}

dishwasher([
    '1',
    '10',
    '15',
    '10', '12', '13', '30',])

