function perfectNumber(num) {

    if (num === aliquotSum(num)) {
        console.log('We have a perfect number!');
    } else {
        console.log("It's not so perfect.");
    }


    function aliquotSum(n) { //That is the sum of its positive divisors excluding the number itself
        let sum = 0;
        for (let divisor = 1; divisor < n; divisor++) {
            if (n % divisor === 0) {
                sum += divisor;
            }
        }
        return sum;
    }
}

perfectNumber(1236498)