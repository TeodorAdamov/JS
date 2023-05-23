function equalElements(array) {
    let longestSequence = ''
    let tempSequence = ''


    for (let i = array.length - 1; i >= 0; i--) {
        if (array[i] === array[i - 1]) {
            if (tempSequence.length > 2) {
                tempSequence += array[i] + ' ';
            } else {
                tempSequence += array[i] + ' ' + array[i] + ' ';
            }
            
        } else {
            tempSequence = ''
        }

        if (tempSequence.length >= longestSequence.length) {
            longestSequence = tempSequence;
        }


    }
    console.log(longestSequence);
}

equalElements([0, 1, 1, 5, 2, 2, 6, 3, 3] )