function sumDigits(num) {
    let numAsStr = num.toString()
    let sum = 0;

    for (let i = 0; i < numAsStr.length; i++){
        let curNum = Number(numAsStr[i])
        sum += curNum
    }
    console.log(sum);
}

sumDigits(245678)