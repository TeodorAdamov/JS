function convert(binary) {

    let decimal = 0;
    let binaryStr = binary.toString()

    for (let i = binaryStr.length - 1; i >= 0; i--) {
        if (binaryStr[i] === '1') {
            decimal += Math.pow(2, binaryStr.length - 1 - i)
        }
    }
    

    console.log(decimal);

}

convert(11110000);