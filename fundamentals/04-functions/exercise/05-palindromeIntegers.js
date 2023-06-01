function palindromeIntegers(arrayOfIntegers) {

    for (let integer of arrayOfIntegers) {
        let strInteger = integer.toString();
        let integerReversed = strInteger
            .split("")
            .reverse()
            .join("")

        if (strInteger === integerReversed) {
            console.log('true');
        } else {
            console.log('false');
        }
    }
}

palindromeIntegers([32,2,232,1010]);