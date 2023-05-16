function tuples(input) {
    const tuples = input[0];
 
    let previousSum = Number(input[1]) + Number(input[2]);
    let maxDiff = 0;
 
    for (let i = 3; i <= tuples * 2; i += 2) {
        const firstNumber = Number(input[i]);
        const secondNumber = Number(input[i + 1]);
 
        const sum = firstNumber + secondNumber;
        const difference = Math.abs(previousSum - sum);
 
        
        maxDiff = difference > maxDiff ? difference : maxDiff;
 
        previousSum = sum;
    }
 
    console.log(maxDiff !==0 ? `No, maxdiff=${maxDiff}` : `Yes, value=${previousSum}`);
}

equalPairs([
    '3',
    '1',
    '2',
    '0',
    '3',
    '4',
    '-1',
])