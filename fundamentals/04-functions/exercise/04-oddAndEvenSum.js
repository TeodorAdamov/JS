function oddAndEvenSum(number) {
    let numToString = number.toString();
    let oddSum = 0;
    let evenSum = 0;

    for (let element of numToString) {
        let num = Number(element)
        num % 2 === 0 ? evenSum += num : oddSum += num
    }

    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);

}

oddAndEvenSum(3495892137259234)