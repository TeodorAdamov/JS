function reverseArray(n, array) {
    let reversedArray = []

    for (let i = n - 1; i >= 0; i--) {
        reversedArray.push(array[i])
    }
    console.log(reversedArray.join(" "));
}

reverseArray(3, [10, 20, 30, 40, 50])

