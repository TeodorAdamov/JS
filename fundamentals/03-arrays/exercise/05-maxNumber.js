function maxNumber(array) {
    let newArr = []

    for (let i = 0; i < array.length; i++) {
        let bool = false
        for (let j = i + 1; j <= array.length; j++) {
            if (array[i] <= array[j]) {
                bool = true;
                break;
            }
        }
        if (bool === true) {
            continue;
        } else {
            newArr.push(array[i])
        }

    }
    console.log(newArr.join(" "));
}

maxNumber([41, 41, 34, 20] )