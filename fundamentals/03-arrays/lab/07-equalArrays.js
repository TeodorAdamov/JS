function equalArrays(arr1, arr2) {

    let sum = 0;
    for (let i = 0; i < arr1.length; i++) {
        let firstNum = Number(arr1[i])
        let secNum = Number(arr2[i])

        if (firstNum === secNum) {
            sum += firstNum
        } else {
            console.log(`Arrays are not identical. Found difference at ${i} index`);
            return;
        }
    }

    console.log(`Arrays are identical. Sum: ${sum}`);
}

equalArrays(['20','20','30'], ['10','20','30'])

