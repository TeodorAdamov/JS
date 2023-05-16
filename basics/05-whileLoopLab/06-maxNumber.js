function maxNumber(input){
    let entry = input[0];
    let index = 1;
    let maxNumber = Number.MIN_SAFE_INTEGER
    
    

    while (entry !== 'Stop') {
       let number = Number(entry)
        if (number > maxNumber){
            maxNumber = number;
        }
        entry = input[index];
        index++;



    }
    console.log(maxNumber);

}

maxNumber(["45", "-20", "7", "99", "Stop"])