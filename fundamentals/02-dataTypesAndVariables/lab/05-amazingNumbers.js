function amazingNumbers(num) {
    let sum = 0;
    let numAsStr = num.toString()

    for (let i = 0; i < numAsStr.length; i++){
        sum += Number(numAsStr[i]);
    }

    let result = sum.toString().includes('9') ? 'True' : 'False'
    "{number} Amazing? {True or False}"
    console.log(`${num} Amazing? ${result}`);
}

amazingNumbers(1233)