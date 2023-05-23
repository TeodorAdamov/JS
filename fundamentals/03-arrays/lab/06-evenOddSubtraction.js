function evenOddSubtraction(array) {
    let oddSum = 0;
    let evenSum = 0;

    for (let cur of array) {
        let num = Number(cur)
        if (num % 2 === 0) {
            evenSum += num;
        } else {
            oddSum += num;
        }
    }

    console.log(evenSum - oddSum);
}

evenOddSubtraction([3,5,7,9])