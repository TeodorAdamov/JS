function extract(arr) {

    let curBiggest = arr[0];

    const newArr = arr.filter((el, index) => {
        if (el >= curBiggest) {
            curBiggest = el;
            return true;
        }
        return false;
    })
    
    return newArr;
}

extract([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24]
)