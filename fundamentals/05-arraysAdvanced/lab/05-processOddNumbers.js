function processOddNumbers(array) {
    let oddPositionArray = [];

    for (let i = 1; i < array.length; i += 2) {
        oddPositionArray.push(array[i]);
    }

    console.log(oddPositionArray.map(x => x * 2).reverse().join(" "))
}

processOddNumbers([10, 15, 20, 25]);