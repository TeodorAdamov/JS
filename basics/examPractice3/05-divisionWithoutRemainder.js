function devisionWithoutRemainder(input) {

    let numCount = Number(input[0]);
    let index = 1
    let counter = 0;
    let p1 = 0;
    let p2 = 0;
    let p3 = 0;

    while (index <= numCount) {
        let curNum = Number(input[index]);
        counter++;

        if (curNum % 2 === 0) {
            p1++;
        }
        if (curNum % 3 === 0) {
            p2++;
        }
        if (curNum % 4 === 0) {
            p3++;
        }
        index++

    }
    console.log(`${(p1 / counter * 100).toFixed(2)}%`);
    console.log(`${(p2 / counter * 100).toFixed(2)}%`);
    console.log(`${(p3 / counter * 100).toFixed(2)}%`);


}

devisionWithoutRemainder([
    '10',
    '680',
    '2',
    '600',
    '200',
    '800',
    '799',
    '199',
    '46',
    '128',
    '65',
])