function careOfPuppy(input){
    let food = Number(input[0]) * 1000;
    let index = 1;
    let command = input[index];
    index++;
    let totalEaten = 0;

    while (command !== 'Adopted'){
        let curGramsEaten = Number(command);
        totalEaten += curGramsEaten;
        command = input[index];
        index++;

    }

    if (food >= totalEaten){
        let foodLeft = food - totalEaten;
        console.log(`Food is enough! Leftovers: ${foodLeft} grams.`);

    } else {
        let foodNeeded = totalEaten - food;
        console.log(`Food is not enough. You need ${foodNeeded} grams more.`);
    }

}

careOfPuppy([
    '4',
    '130',
    '345',
    '400',
    '180',
    '230',
    '120',
    'Adopted',
    ])