function magicMatrix(matrix) {

    const sum = matrix[0].reduce((acc, value) => acc + value);
    let isMagic = true;

    for (let row of matrix) {
        let rowSum = row.reduce((acc, value) => acc + value);

        if (sum !== rowSum) {
            isMagic = false;
        }
    }


    for (let i = 0; i < matrix.length; i++) {
        let colSum = 0;
        for (let j = 0; j < matrix.length; j++) {
            colSum += matrix[j][i]
        }

        if (colSum !== sum) {
            isMagic = false;
        }
    }

    return isMagic;
}

console.log(magicMatrix(
    [[1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]]))