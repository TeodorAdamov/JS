function sorting(array) {

    let sortedArr = [];
    array.sort((a,b) => b - a)
   

    while (array.length > 0) {
        let max = array.shift();
        let min = array.pop();
        sortedArr.push(max);
        sortedArr.push(min);
    }

    console.log(sortedArr.join(" "));

}

sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94])