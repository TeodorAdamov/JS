function moving(input) {
    let wholeSpace = Number(input[0]) * Number(input[1]) * Number(input[2]);
    let index = 3;
    let spaceTaken = 0;

    while (input[index] !== 'Done') {
        let boxesCount = input[index];
        spaceTaken += Number(boxesCount);
        
        if (wholeSpace < spaceTaken) {
            break;
        }
        index++;    
    }

    if (wholeSpace > spaceTaken) {
        let spaceLeft = wholeSpace - spaceTaken;
        console.log(`${spaceLeft} Cubic meters left.`);

    } else {
        let spaceNeeeded = spaceTaken - wholeSpace;
        console.log(`No more free space! You need ${spaceNeeeded} Cubic meters more.`);

    }

}

moving(["10",

"1",

"2",

"4",

"6",

"Done"])