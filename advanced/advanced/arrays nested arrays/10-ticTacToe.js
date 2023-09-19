function ticTacToe(moves) {

    let game = [
        [false, false, false],
        [false, false, false],
        [false, false, false],
    ]
    const winningConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    let player = 'X'


    for (let move = 0; move < moves.length; move++) {
        if (!game[0].includes(false) && !game[1].includes(false) && !game[2].includes(false)) {
            break;
        }

        while (true) {
            const [coorX, coorY] = moves[move].split(' ');
            if (game[coorX][coorY] !== false) {
                console.log("This place is already taken. Please choose another!");
                move++
                if (move === moves.length) {
                    break;
                }
                continue;
            }
            game[coorX][coorY] = player
            if (player === 'X') {
                player = 'O'
            } else {
                player = 'X'
            }
            break;
        }

        if ((game[0][0] == 'X' && game[0][1] == 'X' && game[0][2] == 'X') ||
            (game[1][0] == 'X' && game[1][1] == 'X' && game[1][2] == 'X') ||
            (game[2][0] == 'X' && game[2][1] == 'X' && game[2][2] == 'X') ||
            (game[0][0] == 'X' && game[1][0] == 'X' && game[2][0] == 'X') ||
            (game[0][1] == 'X' && game[1][1] == 'X' && game[2][1] == 'X') ||
            (game[0][2] == 'X' && game[1][2] == 'X' && game[2][2] == 'X') ||
            (game[0][0] == 'X' && game[1][1] == 'X' && game[2][2] == 'X') ||
            (game[2][0] == 'X' && game[1][1] == 'X' && game[0][2] == 'X')) {
            console.log("Player X wins!");
            game.forEach(row => {
                console.log(row.join('\t'));
            })
            return;
        }

        if ((game[0][0] == 'O' && game[0][1] == 'O' && game[0][2] == 'O') ||
            (game[1][0] == 'O' && game[1][1] == 'O' && game[1][2] == 'O') ||
            (game[2][0] == 'O' && game[2][1] == 'O' && game[2][2] == 'O') ||
            (game[0][0] == 'O' && game[1][0] == 'O' && game[2][0] == 'O') ||
            (game[0][1] == 'O' && game[1][1] == 'O' && game[2][1] == 'O') ||
            (game[0][2] == 'O' && game[1][2] == 'O' && game[2][2] == 'O') ||
            (game[0][0] == 'O' && game[1][1] == 'O' && game[2][2] == 'O') ||
            (game[2][0] == 'O' && game[1][1] == 'O' && game[0][2] == 'O')) {
            console.log("Player O wins!");
            game.forEach(row => {
                console.log(row.join('\t'));
            })
            return;
        }

    }

    console.log('The game ended! Nobody wins :(');
    game.forEach(row => {
        console.log(row.join('\t'));
    })

}

ticTacToe([
    "0 1",
    "0 0",
    "0 2",
    "2 0",
    "1 0",
    "1 2",
    "1 1",
    "2 1",
    "2 2",
    "0 0"])