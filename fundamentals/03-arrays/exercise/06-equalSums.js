function equalSums(array) {

    for (let i = 0; i < array.length; i++) {
        let leftSum = 0;
        let rightSum = 0;
        for (let j = 0; j < array.length; j++) {
            if (i === j){
                continue;
            } else if (j < i) {
                leftSum += Number(array[j]); 
            } else {
                rightSum += Number(array[j])
            }
        }
        if (leftSum === rightSum) {
            console.log(i);
            return;
        }
    }
    console.log('no');
}

equalSums([10, 5, 5, 99,
    3, 4, 2, 5, 1,
    1, 4]
    )