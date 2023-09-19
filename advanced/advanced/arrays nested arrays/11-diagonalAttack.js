function diagonalAttack(arr) {

    //parse to matrix
    const matrix = []

    for (const line of arr) {
        matrix.push(line.split(' ').map(Number))
    }

    //sum diagonals
    let mainDiagonal = 0;
    let secondDiagonal = 0;

    for (let i = 0; i < matrix.length; i++) {
        mainDiagonal += matrix[i][i]
        secondDiagonal += matrix[i][matrix.length - i - 1]
    }

    //if diagonals are equal change all other nums to diagonal sum

    if (mainDiagonal === secondDiagonal) {
        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix[i].length; j++) {
                if (i !== j && j !== matrix.length - i - 1) {
                    matrix[i][j] = mainDiagonal
                }
            }
        }
    }
    matrix.forEach(row => console.log(row.join(' ')))
}

diagonalAttack(['1 1 1',
'1 1 1',
'1 1 0'])