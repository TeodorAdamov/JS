function condense(array) {

    let condensed = []
    while (array.length > 1) {
        for (let i = 0; i < array.length - 1; i++) {
            condensed[i] = array[i] + array[i + 1];
            
        }
        array = condensed;
        condensed = []
    }
    console.log(array[0]);
}

condense([5,0,4,1,2])