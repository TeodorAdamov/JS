function bombNumbers(numbers, bombNumber) {

    let bomb = bombNumber[0];
    let bombPower = bombNumber[1];



    while (numbers.includes(bomb) === true) {
        let bombIndex = numbers.indexOf(bomb);
        let spliceStart = bombIndex - bombPower;
        if (spliceStart < 0) {
            spliceStart = 0;
        }
        let deleteCount = (2 * bombPower) + 1;

        numbers.splice(spliceStart, deleteCount)
    }
    let sum = 0;
    for (let n of numbers) {
        sum += n;
    }

    console.log(sum);
}

bombNumbers([1, 2, 2, 4, 2, 2, 2, 9], [4, 2])