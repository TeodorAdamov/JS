function spiralMatrix(num1, num2) {
    let array = []

    for (let i = 0; i < num1; i++) {
        array[i] = [];
    }
    console.log(array.join("\n"));
}

spiralMatrix(3, 3)