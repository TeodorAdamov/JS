function oddEven(input) {
    let numbersCount = Number(input[0]);
    let evenSum = 0;
    let evenMin = 1000000000.0;
    let evenMax = -1000000000.0;
    let oddSum = 0;
    let oddMin = 1000000000.0;
    let oddMax = -1000000000.0;


    for (let i = 1; i <= numbersCount; i++) {
        let currentNum = Number(input[i]);

        if (i % 2 === 0) {
            evenSum += currentNum;
            if (currentNum > evenMax) {
                evenMax = currentNum;
            }
            if (currentNum < evenMin) {
                evenMin = currentNum;
            }
        } else {
            oddSum += currentNum;
            if (currentNum > oddMax) {
                oddMax = currentNum;
            }
            if (currentNum < oddMin) {
                oddMin = currentNum;
            }
        }

    }

    console.log(`OddSum=${oddSum.toFixed(2)},`);
    oddMin === 1000000000.0 ? console.log('OddMin=No,') : console.log(`OddMin=${oddMin.toFixed(2)},`);
    oddMax === -1000000000.0 ? console.log('OddMax=No,') : console.log(`OddMax=${oddMax.toFixed(2)},`);
    console.log(`EvenSum=${evenSum.toFixed(2)},`);
    evenMin === 1000000000.0 ? console.log('EvenMin=No,') : console.log(`EvenMin=${evenMin.toFixed(2)},`);
    evenMax === -1000000000.0 ? console.log('EvenMax=No') : console.log(`EvenMax=${evenMax.toFixed(2)}`);


}

oddEven(['6', '2', '3', '5', '4', '2', '1'])