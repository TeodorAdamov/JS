function equalSum(input) {
    let startNum = Number(input[0]);
    let finishNum = Number(input[1]);

    let result = '';

    for (let i = startNum; i <= finishNum; i++) {
        let numberAsString = i.toString()
        let evenSum = 0;
        let oddSum = 0;
        for (let curNum = 0; curNum < numberAsString.length; curNum++) {
            let position = curNum + 1;
            if (position % 2 === 0) {
                evenSum += Number(numberAsString[curNum])
            } else {
                oddSum += Number(numberAsString[curNum])
            }

        }
        if (oddSum === evenSum) {
            result += i + ' '
        }

    }
    console.log(result);

}

equalSum([
    "100000",

    "100050"])