function cake(input) {
    let cakePieces = Number(input[0]) * Number(input[1]);
    let piecesEaten = Number(input[2]);
    let index = 3;
    let totalPiecesEaten = 0;


    while (index <= input.length) {
        totalPiecesEaten += piecesEaten;

        if (input[index] === 'STOP' && cakePieces >= totalPiecesEaten) {

            let piecesLeft = cakePieces - totalPiecesEaten;
            console.log(`${piecesLeft} pieces are left.`);
            break;

        }
        piecesEaten = Number(input[index])
        index++;

        if (totalPiecesEaten > cakePieces) {
            let piecesNeeded = totalPiecesEaten - cakePieces;
            console.log(`No more cake left! You need ${piecesNeeded} pieces more.`);
        }
    }

}

cake(["10",

    "2",

    "2",

    "4",

    "6",

    "STOP"])