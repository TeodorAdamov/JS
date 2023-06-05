function bunnyKill(array) {

    const bombs = array.pop().split(" ").map(bomb => bomb.split(",").map(n => Number(n)));
    const matrix = array.map(row => row.split(" ").map(n => Number(n)));
    let totalDamage = 0;
    let kills = 0;


    for (let i = 0; i < bombs.length; i++) {
        const row = bombs[i][0];
        const column = bombs[i][1];
        const bombDamage = matrix[row][column];
        if (bombDamage <= 0) {
            continue;
        }

        const explodeRowStart = Math.max(0, row - 1);
        const explodeRowEnd = Math.min(matrix.length - 1, row + 1);

        for (let explodeCycle = explodeRowStart; explodeCycle <= explodeRowEnd; explodeCycle++) {
            const explodeColumnStart = Math.max(0, column - 1);
            const explodeColumnEnd = Math.min(matrix[row].length - 1, column + 1);

            for (let explosion = explodeColumnStart; explosion <= explodeColumnEnd; explosion++) {
                matrix[row][column] -= bombDamage;
                matrix[explodeCycle][explosion] -= bombDamage;
            }
        }

        kills++;
        totalDamage += bombDamage;
    }

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] > 0) {
                totalDamage += matrix[i][j]
                kills++;
            }
        }
    }
    console.log(totalDamage);
    console.log(kills);

}

bunnyKill(
    ['10 10 10',
        '10 10 10',
        '10 10 10',
        '0,0'])