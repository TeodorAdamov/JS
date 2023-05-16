function maxNumber(input){
    let entry = input[0];
    let index = 1;
    let minNumber = Number.MAX_SAFE_INTEGER
    
    

    while (entry !== 'Stop') {
       let number = Number(entry)
        if (number < minNumber){
            minNumber = number;
        }
        entry = input[index];
        index++;



    }
    console.log(minNumber);

}

maxNumber(["45", "-20", "7", "99", "Stop"])