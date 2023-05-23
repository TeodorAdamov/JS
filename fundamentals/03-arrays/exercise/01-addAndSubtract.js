function addAndSubtract(numbers) {

    let originalSum = 0;
    let modifiedSum = 0;
    let newNumbers = []

    for (let i = 0; i < numbers.length; i++) {
        originalSum += numbers[i]
        if ((numbers[i]) % 2 === 0) {
            newNumbers.push(numbers[i] + i);
        } else {
            newNumbers.push(numbers[i] - i);
        }
    }

    for (let cur of newNumbers) {
        modifiedSum += cur
    }

    console.log(newNumbers);
    console.log(originalSum);
    console.log(modifiedSum);
}

addAndSubtract([5, 15, 23, 56, 35])