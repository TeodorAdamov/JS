function sorting(array) {

    let sortedArr = [];

    while (array.length > 0) {
        let maxElementIndex = array.indexOf(Math.max(...array));
        let max = array.splice(maxElementIndex, 1);
        sortedArr.push(max[0]);
        let minElementIndex = array.indexOf(Math.min(...array));
        let min = array.splice(minElementIndex, 1);
        sortedArr.push(min[0])
    }

    console.log(sortedArr.join(" "));

}

sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94])

//expected output 94 1 69 2 63 3 52 18 31 21
