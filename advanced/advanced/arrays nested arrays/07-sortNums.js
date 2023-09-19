function sortNums(numbers) {

    numbers.sort((a, b) => a - b);

    const newNumsArr = [];

    while (numbers.length > 0) {
        const min = numbers.shift();
        const max = numbers.pop();

        newNumsArr.push(min)
        newNumsArr.push(max)
    }

    return newNumsArr;
}

sortNums([1, 65, 3, 52, 48, 63, 31, -3, 18, 56])