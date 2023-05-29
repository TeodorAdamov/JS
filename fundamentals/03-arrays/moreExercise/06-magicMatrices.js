function magicMatrices(matrix) {

    let isMagic = true;

    for (let iteration = 0; iteration < matrix.length - 1; iteration++) {
        let row1Sum = 0;
        let col1Sum = 0;
        let row2Sum = 0;
        let col2Sum = 0;

        for (let row = 0; row < matrix.length; row++) { 
            row1Sum += matrix[iteration][row];
            row2Sum += matrix[iteration + 1][row]
        }
        for (let col = 0; col < matrix.length; col++) {
            col1Sum += matrix[iteration][col];
            col2Sum += matrix[iteration + 1][col];

        }
        if (row1Sum !== row2Sum || col1Sum !== col2Sum) {
            console.log('false');
            return;
        }
    }
    console.log('true');
}

magicMatrices([
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]

)