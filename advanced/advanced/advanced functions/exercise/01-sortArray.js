function sortArray(arr, order) {

    if (order === 'asc') {
        return arr.sort((a, b) => a - b)
    } else {
        return arr.sort((a, b) => b - a)
    }
}

sortArray([14, 7, 17, 6, 8], "asc");
