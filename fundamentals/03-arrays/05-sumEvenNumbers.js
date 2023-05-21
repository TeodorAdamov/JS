function sumEvenNumbers(array) {

    let sum = 0;
    for (let current of array) {
        let num = Number(current)
        if (num % 2 === 0) {
            sum += num;
        }
    }

    console.log(sum);
}

sumEvenNumbers(['2','4','6','8','10'])