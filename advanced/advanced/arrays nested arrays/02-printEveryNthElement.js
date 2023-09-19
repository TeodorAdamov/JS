function printNth(arr, num) {
    const newArr = [];

    for (let i = 0; i < arr.length; i++) {
        if (i % num === 0) {
            newArr.push(arr[i])
        }
    }

    return newArr;
}

printNth(['dsa',
'asd', 
'test', 
'tset'], 
2)