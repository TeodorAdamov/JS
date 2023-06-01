function signCheck(numOne, numTwo, numThree) {
    function checkNegativeCount(a, b, c) {
        let negativeCount = 0;
        if (a < 0) {
            negativeCount++;
        }
        if (b < 0) {
            negativeCount++;
        }
        if (c < 0) {
            negativeCount++
        }
        return negativeCount;
    }

    if (checkNegativeCount(numOne, numTwo, numThree) === 1) {
        console.log('Negative');
    } else if (checkNegativeCount(numOne, numTwo, numThree) === 2) {
        console.log('positive');
    } else if (checkNegativeCount(numOne, numTwo, numThree) === 3) {
        console.log('Negative');
    } else {
        console.log('Positive');
    }

}

signCheck(5, 12, -15)
signCheck(-6,-12,14)
signCheck(-1,-2,-3)
signCheck(-5,1)